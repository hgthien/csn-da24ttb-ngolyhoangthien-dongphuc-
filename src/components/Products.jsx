import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
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

  return (
    <div className="products-wrapper">
      <div className="products-container">
        
        <div className="products-header">
          <h2 className="products-title">
            {currentCategory ? currentCategory.label : 'TẤT CẢ ĐỒNG PHỤC'}
          </h2>
          <span className="products-count">{filteredProducts.length} Sản phẩm</span>
        </div>

        {loading ? (
          <p className="products-loading">Đang tải bộ sưu tập...</p>
        ) : (
          <div className="products-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                
                <div className="product-img-box">
                  <img src={product.image} alt={product.name} className="product-img" />
                </div>

                <div className="product-info">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-name">{product.name}</h3>
                  
                  <div className="product-footer">
                    <span className="product-price">
                      {product.price.toLocaleString('vi-VN')} đ
                    </span>
                    <button className="product-btn">Thêm</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Products;