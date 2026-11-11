import { useState, useEffect } from 'react';
import { FiSearch, FiX, FiCheck, FiShield, FiTruck, FiLayers, FiSliders, FiRotateCcw } from 'react-icons/fi';
import './Search.css';

function Search() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [priceRange, setPriceRange] = useState('ALL');
  const [sortBy, setSortBy] = useState('DEFAULT');
  const [showFilters, setShowFilters] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [detailQty, setDetailQty] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        const productData = Array.isArray(data) ? data : data.products || [];
        setProducts(productData);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const popularTags = ["Oversize", "Polo", "Đại Học Trà Vinh", "Sơ Mi", "Gia Đình", "Thêu Vi Tính"];

  const activeFilterCount =
    (selectedCategory !== 'ALL' ? 1 : 0) +
    (priceRange !== 'ALL' ? 1 : 0) +
    (sortBy !== 'DEFAULT' ? 1 : 0);

  const filteredProducts = products
    .filter(p => {
      const matchKeyword =
        searchTerm.trim() === '' ||
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.material && p.material.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCat = selectedCategory === 'ALL' || p.category === selectedCategory;

      let matchPrice = true;
      if (priceRange === 'UNDER_150') matchPrice = p.price <= 150000;
      else if (priceRange === '150_TO_200') matchPrice = p.price > 150000 && p.price <= 200000;
      else if (priceRange === 'OVER_200') matchPrice = p.price > 200000;

      return matchKeyword && matchCat && matchPrice;
    })
    .sort((a, b) => {
      if (sortBy === 'PRICE_ASC') return a.price - b.price;
      if (sortBy === 'PRICE_DESC') return b.price - a.price;
      if (sortBy === 'NAME_ASC') return a.name.localeCompare(b.name);
      return 0;
    });

  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('ALL');
    setPriceRange('ALL');
    setSortBy('DEFAULT');
  };

  const openProductDetail = (product) => {
    setSelectedProduct(product);
    const defaultSize = product.sizes && product.sizes.length > 0 ? product.sizes[0] : 'Tiêu chuẩn';
    setSelectedSize(defaultSize);
    setDetailQty(1);
  };

  const handleAddToCart = (product, quantityToAdd = 1, size = 'Tiêu chuẩn') => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id && item.size === size);

    if (existingItem) {
      existingItem.quantity += quantityToAdd;
    } else {
      cart.push({ ...product, quantity: quantityToAdd, size });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.dispatchEvent(new Event('cartUpdated'));
    alert(`Đã thêm ${quantityToAdd} x "${product.name}" (Phân loại: ${size}) vào giỏ hàng!`);
    setSelectedProduct(null);
  };

  return (
    <div className="search-page-wrapper">
      <div className="search-container">
        
        <div className="search-header-bar">
          <div className="search-main-row">
            <div className="search-input-wrap">
              <FiSearch className="search-input-icon" size={18} />
              <input
                type="text"
                placeholder="Tìm tên mẫu đồng phục, chất vải, trường học..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
              {searchTerm && (
                <button className="clear-input-btn" onClick={() => setSearchTerm('')}>
                  <FiX size={15} />
                </button>
              )}
            </div>

            <button 
              className={`toggle-filter-btn ${showFilters || activeFilterCount > 0 ? 'active' : ''}`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <FiSliders size={16} />
              <span>Bộ lọc</span>
              {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
            </button>
          </div>

          {showFilters && (
            <div className="search-expand-filters">
              <div className="filter-item">
                <span className="filter-item-label">Danh mục</span>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                  <option value="ALL">Tất cả đồng phục</option>
                  <option value="Áo Lớp">Áo Lớp</option>
                  <option value="Áo Công Sở">Áo Công Sở</option>
                  <option value="Áo Nhóm - Gia Đình">Áo Nhóm - Gia Đình</option>
                  <option value="Mẫu In">Mẫu In & Thêu</option>
                </select>
              </div>

              <div className="filter-item">
                <span className="filter-item-label">Khoảng giá</span>
                <select value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                  <option value="ALL">Mọi mức giá</option>
                  <option value="UNDER_150">Dưới 150.000 đ</option>
                  <option value="150_TO_200">150.000 đ - 200.000 đ</option>
                  <option value="OVER_200">Trên 200.000 đ</option>
                </select>
              </div>

              <div className="filter-item">
                <span className="filter-item-label">Sắp xếp</span>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="DEFAULT">Mặc định</option>
                  <option value="PRICE_ASC">Giá thấp đến cao</option>
                  <option value="PRICE_DESC">Giá cao đến thấp</option>
                  <option value="NAME_ASC">Tên A - Z</option>
                </select>
              </div>
            </div>
          )}

          <div className="search-sub-row">
            <div className="search-tags-scroll">
              <span className="tag-title">Từ khóa:</span>
              {popularTags.map(tag => (
                <button
                  key={tag}
                  className={`tag-pill ${searchTerm.toLowerCase() === tag.toLowerCase() ? 'active' : ''}`}
                  onClick={() => setSearchTerm(searchTerm === tag ? '' : tag)}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="search-summary-info">
              <span>
                Hiển thị <strong>{filteredProducts.length}</strong> trên <strong>{products.length}</strong> mẫu
              </span>
              {(searchTerm || activeFilterCount > 0) && (
                <button className="reset-mini-btn" onClick={handleResetFilters}>
                  <FiRotateCcw size={13} /> Làm mới
                </button>
              )}
            </div>
          </div>
        </div>

        {loading ? (
          <div className="search-empty-state">Đang tải dữ liệu sản phẩm...</div>
        ) : filteredProducts.length > 0 ? (
          <div className="search-results-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="search-product-card" onClick={() => openProductDetail(product)}>
                <div className="search-img-wrap">
                  <img src={product.image} alt={product.name} />
                  <div className="search-quick-hint">Bấm để chọn size</div>
                </div>
                <div className="search-card-body">
                  <span className="search-card-cat">{product.category}</span>
                  <h3 className="search-card-title">{product.name}</h3>
                  <div className="search-card-footer">
                    <span className="search-card-price">{product.price.toLocaleString('vi-VN')} đ</span>
                    <button
                      className="search-card-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProductDetail(product);
                      }}
                    >
                      Chọn Mua
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="search-empty-state">
            <div className="empty-search-icon">
              <FiSearch size={32} color="#f97316" />
            </div>
            <h3>Không tìm thấy mẫu đồng phục phù hợp</h3>
            <p>Hãy thử chọn lại mức giá hoặc tìm bằng từ khóa khác.</p>
            <button className="empty-reset-btn" onClick={handleResetFilters}>
              Xem tất cả 16 mẫu
            </button>
          </div>
        )}

      </div>

      {selectedProduct && (
        <div className="detail-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="detail-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close-btn" onClick={() => setSelectedProduct(null)}>
              <FiX size={22} />
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
                    THÊM VÀO GIỎ ({(selectedProduct.price * detailQty).toLocaleString('vi-VN')} đ)
                  </button>
                </div>

                <div className="detail-guarantees">
                  <span><FiCheck color="#f97316" /> Miễn phí thiết kế mẫu 3D</span>
                  <span><FiCheck color="#f97316" /> Bảo hành in thêu 12 tháng</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;