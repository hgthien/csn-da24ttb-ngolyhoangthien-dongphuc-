import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiX, FiCheck, FiShield, FiTruck, FiLayers } from 'react-icons/fi';
import './Products.css'; 

const CATEGORY_MAP = {
  'ao-lop': { label: 'ĐỒNG PHỤC ÁO LỚP', value: 'Áo Lớp' },
  'ao-cong-so': { label: 'ĐỒNG PHỤC ÁO CÔNG SỞ', value: 'Áo Công Sở' },
  'ao-nhom': { label: 'ÁO NHÓM - GIA ĐÌNH', value: 'Áo Nhóm - Gia Đình' },
  'mau-in': { label: 'MẪU IN ĐỒNG PHỤC', value: 'Mẫu In' }
};

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [detailQty, setDetailQty] = useState(1);

  const categorySlug = searchParams.get('category');
  const currentCategory = categorySlug && CATEGORY_MAP[categorySlug] ? CATEGORY_MAP[categorySlug] : null;

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && data.products) {
          setProducts(data.products);
        }
        setLoading(false);
      })
      .catch(err => console.error("Lỗi tải dữ liệu: ", err));
  }, []);

  const filteredProducts = currentCategory
    ? products.filter(p => p.category === currentCategory.value)
    : products;


  const openProductDetail = (product) => {
    setSelectedProduct(product);
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Mặc định';
    setSelectedSize(defaultSize);
    setDetailQty(1);
  };

  const handleAddToCart = (product, quantityToAdd = 1, size = '') => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantityToAdd;
    } else {
      cart.push({ ...product, quantity: quantityToAdd });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    
    const sizeText = size ? ` (Phân loại: ${size})` : '';
    alert(`Đã thêm ${quantityToAdd} x "${product.name}"${sizeText} vào giỏ hàng!`);
    setSelectedProduct(null);
  };

  return (
    <div className="products-wrapper">
      <div className="products-container">
        
        <div className="products-header">
          <h2 className="products-title">
            {currentCategory ? currentCategory.label : 'TẤT CẢ ĐỒNG PHỤC'}
          </h2>
        </div>

        {loading ? (
          <p className="products-loading">Đang tải bộ sưu tập...</p>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card" onClick={() => openProductDetail(product)}>
                
                <div className="product-img-box">
                  <img src={product.image} alt={product.name} className="product-img" />
                  <div className="quick-view-hint">Bấm để xem chi tiết</div>
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="product-footer">
                    <span className="product-price">
                      {product.price.toLocaleString('vi-VN')} đ
                    </span>
                    <button 
                      className="product-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openProductDetail(product);
                      }}
                    >
                      Thêm
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {selectedProduct && (
        <div className="detail-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="detail-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close-btn" onClick={() => setSelectedProduct(null)} title="Đóng">
              <FiX size={24} />
            </button>

            <div className="detail-grid">
              <div className="detail-img-col">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="detail-main-img" />
              </div>

              <div className="detail-info-col">
                <span className="detail-badge">{selectedProduct.category}</span>
                <h2 className="detail-title">{selectedProduct.name}</h2>
                <div className="detail-price-box">
                  <span className="detail-price">{selectedProduct.price.toLocaleString('vi-VN')} đ</span>
                  <span className="detail-unit">/ sản phẩm (Giá sỉ tận xưởng)</span>
                </div>

                <div className="detail-specs">
                  <div className="spec-row">
                    <FiLayers className="spec-icon" />
                    <span><strong>Chất liệu:</strong> {selectedProduct.material}</span>
                  </div>
                  <div className="spec-row">
                    <FiShield className="spec-icon" />
                    <span><strong>Công nghệ in/thêu:</strong> {selectedProduct.printTech}</span>
                  </div>
                  <div className="spec-row">
                    <FiTruck className="spec-icon" />
                    <span><strong>Quy cách đặt hàng:</strong> {selectedProduct.minOrder}</span>
                  </div>
                </div>

                {selectedProduct.sizes && selectedProduct.sizes.length > 0 && (
                  <div className="detail-option-group">
                    <label className="detail-label">CHỌN SIZE / QUY CÁCH:</label>
                    <div className="size-list">
                      {selectedProduct.sizes.map(size => (
                        <button
                          key={size}
                          className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                          onClick={() => setSelectedSize(size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="detail-actions">
                  <div className="detail-qty-box">
                    <button onClick={() => setDetailQty(q => (q > 1 ? q - 1 : 1))}>-</button>
                    <span>{detailQty}</span>
                    <button onClick={() => setDetailQty(q => q + 1)}>+</button>
                  </div>

                  <button 
                    className="detail-add-btn"
                    onClick={() => handleAddToCart(selectedProduct, detailQty, selectedSize)}
                  >
                    THÊM VÀO GIỎ HÀNG ({(selectedProduct.price * detailQty).toLocaleString('vi-VN')} đ)
                  </button>
                </div>

                <div className="detail-guarantees">
                  <span><FiCheck color="#f97316" /> Miễn phí thiết kế mẫu 3D</span>
                  <span><FiCheck color="#f97316" /> Đổi trả miễn phí nếu lỗi in thêu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;