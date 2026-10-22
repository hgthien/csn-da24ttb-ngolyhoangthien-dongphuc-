import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  // Gọi API lấy dữ liệu sản phẩm
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (data && data.products) {
          setProducts(data.products);
        }
      })
      .catch(err => console.error("Lỗi tải dữ liệu tìm kiếm:", err));
  }, []);

  // Lọc sản phẩm
  const filteredProducts = products.filter(product =>
    product && product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '60vh', paddingBottom: '80px' }}>
      
      {/* 1. Thanh điều hướng (Breadcrumb) */}
      <div style={{ padding: '15px 40px', fontSize: '14px', color: '#555' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#111' }}>Trang chủ</Link>
        <span style={{ margin: '0 10px', color: '#999' }}>›</span>
        <span style={{ color: '#111' }}>Tìm kiếm</span>
      </div>

      {/* 2. Khu vực trung tâm (Khung Search) */}
      <div style={{ maxWidth: '750px', margin: '70px auto 0', padding: '0 20px' }}>
        
        {/* Tiêu đề mỏng, căn giữa */}
        <h2 style={{ fontSize: '26px', fontWeight: '400', color: '#111', textAlign: 'center', marginBottom: '40px', letterSpacing: '0.5px' }}>
          Tìm kiếm
        </h2>
        
        {/* Ô input viền mảnh, góc vuông, icon mỏng */}
        <div style={{ position: 'relative', marginBottom: '50px' }}>
          <input 
            type="text" 
            placeholder="Tìm kiếm" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '14px 45px 14px 15px',
              fontSize: '15px',
              border: '1px solid #d9d9d9',
              borderRadius: '0px', // Đảm bảo góc vuông sắc cạnh
              outline: 'none',
              color: '#111',
              boxSizing: 'border-box'
            }}
          />
          <FiSearch size={20} color="#666" style={{ position: 'absolute', right: '15px', top: '15px' }} />
        </div>

        {/* 3. Khu vực hiển thị kết quả (chỉ hiện khi gõ chữ) */}
        {searchTerm && (
          <div style={{ textAlign: 'left' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#111', borderBottom: '1px solid #eee', paddingBottom: '12px', marginBottom: '25px', textTransform: 'uppercase' }}>
              Kết quả tìm kiếm ({filteredProducts.length})
            </h3>
            
            {filteredProducts.length > 0 ? (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
                {filteredProducts.map(product => (
                  <Link to="/san-pham" key={product.id} style={{ textDecoration: 'none', color: '#111', border: '1px solid #f0f0f0' }}>
                    <img src={product.image} alt={product.name} style={{ width: '100%', height: '280px', objectFit: 'cover', display: 'block' }} />
                    <div style={{ padding: '15px' }}>
                      <h4 style={{ fontSize: '14px', fontWeight: '400', margin: '0 0 10px 0', lineHeight: '1.4' }}>{product.name}</h4>
                      <span style={{ fontSize: '15px', fontWeight: '700', color: '#111' }}>
                        {product.price.toLocaleString('vi-VN')} đ
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <p style={{ color: '#666', textAlign: 'center', marginTop: '40px', fontSize: '15px' }}>
                Không tìm thấy sản phẩm nào.
              </p>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default Search;