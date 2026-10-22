import { useState, useEffect } from 'react';
import './Products.css'; 

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.error("Lỗi tải dữ liệu: ", err));
  }, []);

  return (
    <div className="products-wrapper">
      <div className="products-container">
        
        <div className="products-header">
          <h2 className="products-title">TẤT CẢ ĐỒNG PHỤC</h2>
          <span className="products-count">{products.length} Sản phẩm</span>
        </div>

        {loading ? (
          <p style={{ textAlign: 'center', color: '#666', padding: '50px 0' }}>Đang tải bộ sưu tập...</p>
        ) : (
          <div className="products-grid">
            {products.map(product => (
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