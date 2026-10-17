import { useState, useEffect } from 'react';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  return (
    <div>
      <h2 style={{ color: '#0056b3', textAlign: 'center', marginBottom: '30px' }}>Danh Sách Đồng Phục</h2>
    
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        {products.map(product => (
          <div key={product.id} style={{ border: '1px solid #cce5ff', borderRadius: '8px', padding: '15px', backgroundColor: '#fff', textAlign: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '5px' }} 
            />
            
            <h3 style={{ color: '#007bff', fontSize: '18px', margin: '15px 0 10px' }}>{product.name}</h3>
            
            <span style={{ display: 'inline-block', padding: '5px 10px', backgroundColor: '#e6f2ff', color: '#0056b3', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold', marginBottom: '10px' }}>
              {product.category}
            </span>
            
            <p style={{ color: '#d9534f', fontSize: '20px', fontWeight: 'bold', margin: '10px 0' }}>
              {product.price.toLocaleString('vi-VN')} đ
            </p>
            
            <button style={{ marginTop: '10px', padding: '12px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%', fontWeight: 'bold', fontSize: '14px' }}>
              Thêm vào giỏ hàng
            </button>
            
          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;