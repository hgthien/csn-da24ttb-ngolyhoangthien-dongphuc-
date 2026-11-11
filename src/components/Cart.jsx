import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiShoppingBag } from 'react-icons/fi';
import './Cart.css';

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);


  const updateQuantity = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity < 1) newCart[index].quantity = 1;
    
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const removeItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <h2 className="cart-page-title">GIỎ HÀNG CỦA BẠN</h2>

       {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon-wrap">
              <FiShoppingBag size={56} color="#f97316" />
            </div>
            <p className="cart-empty-text">Giỏ hàng của bạn đang trống!</p>
            <p className="cart-empty-subtext">Vẫn còn rất nhiều mẫu đồng phục đẹp đang chờ bạn khám phá.</p>
            <Link to="/san-pham" className="continue-shopping-btn">TIẾP TỤC MUA SẮM</Link>
          </div>
        ) : (
          <div className="cart-layout">
            
            <div className="cart-items-section">
              {cart.map((item, index) => (
                <div key={index} className="cart-item-card">
                  <div className="cart-item-img-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-category">Phân loại: {item.category}</p>
                    <p className="cart-item-price">{item.price.toLocaleString('vi-VN')} đ</p>
                  </div>
                  
                  <div className="cart-item-actions">
                    <div className="qty-control">
                      <button onClick={() => updateQuantity(index, -1)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(index, 1)}>+</button>
                    </div>
                    <button className="remove-btn" onClick={() => removeItem(index)} title="Xóa sản phẩm">
                      <FiTrash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary-section">
              <h3 className="summary-title">TÓM TẮT ĐƠN HÀNG</h3>
              
              <div className="summary-row">
                <span>Tạm tính:</span>
                <span>{totalAmount.toLocaleString('vi-VN')} đ</span>
              </div>
              <div className="summary-row">
                <span>Khuyến mãi (Ưu đãi tập thể):</span>
                <span style={{ color: '#16a34a' }}>- 0 đ</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total-row">
                <span>Tổng cộng:</span>
                <span className="total-price">{totalAmount.toLocaleString('vi-VN')} đ</span>
              </div>
              
              <button className="checkout-btn">TIẾN HÀNH THANH TOÁN</button>
              <Link to="/san-pham" className="continue-link">Tiếp tục chọn thêm đồng phục</Link>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;