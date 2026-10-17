import { useState } from 'react';

function Cart() {
  // Dữ liệu giỏ hàng giả lập để test giao diện
  const [cartItems] = useState([
    { id: 1, name: "Áo Lớp Oversize Cổ Tròn Phối Màu", price: 120000, quantity: 30 },
    { id: 2, name: "Áo Polo Công Sở Vải Cá Sấu Cao Cấp", price: 180000, quantity: 15 }
  ]);

  // Hàm tự động tính tổng tiền
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
      
      {/* CỘT TRÁI: DANH SÁCH SẢN PHẨM TRONG GIỎ HÀNG */}
      <div style={{ flex: '1 1 500px', backgroundColor: '#ffffff', padding: '25px', borderRadius: '10px', border: '1px solid #cce5ff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
        <h2 style={{ color: '#0056b3', borderBottom: '2px solid #e6f2ff', paddingBottom: '10px', marginTop: 0 }}>Giỏ Hàng Đồng Phục</h2>
        
        {cartItems.map((item, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', padding: '15px 0' }}>
            <div>
              <h4 style={{ color: '#333', margin: '0 0 5px 0', fontSize: '18px' }}>{item.name}</h4>
              <p style={{ margin: 0, color: '#007bff', fontWeight: 'bold' }}>Số lượng: {item.quantity} áo</p>
            </div>
            <div style={{ fontWeight: 'bold', color: '#d9534f', fontSize: '18px' }}>
              {(item.price * item.quantity).toLocaleString('vi-VN')} đ
            </div>
          </div>
        ))}
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', fontSize: '22px', fontWeight: 'bold' }}>
          <span>Tổng cộng:</span>
          <span style={{ color: '#007bff' }}>{totalAmount.toLocaleString('vi-VN')} đ</span>
        </div>
      </div>

      <div style={{ flex: '1 1 400px', backgroundColor: '#e6f2ff', padding: '25px', borderRadius: '10px' }}>
        <h2 style={{ color: '#0056b3', borderBottom: '2px solid #b3d7ff', paddingBottom: '10px', marginTop: 0 }}>Thông Tin Đặt In & Giao Hàng</h2>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }} onSubmit={(e) => { e.preventDefault(); alert('Đã gửi yêu cầu đặt hàng thành công!'); }}>
          
          <input type="text" placeholder="Tên người đại diện / Tên tổ chức" style={{ padding: '12px', borderRadius: '5px', border: '1px solid #b3d7ff', outline: 'none' }} required />
          
          <input type="tel" placeholder="Số điện thoại liên hệ (Zalo)" style={{ padding: '12px', borderRadius: '5px', border: '1px solid #b3d7ff', outline: 'none' }} required />
          
          <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px', border: '1px dashed #007bff' }}>
            <label style={{ color: '#0056b3', fontWeight: 'bold', fontSize: '14px', display: 'block', marginBottom: '8px' }}>Tải lên file Logo/Mẫu in (PNG, JPG, AI):</label>
            <input type="file" style={{ width: '100%' }} />
          </div>

          <textarea placeholder="Ghi chú yêu cầu in ấn (Ví dụ: In logo nhỏ ở ngực trái, slogan to sau lưng, lấy gấp vào thứ 6...)" rows="4" style={{ padding: '12px', borderRadius: '5px', border: '1px solid #b3d7ff', outline: 'none', resize: 'vertical' }}></textarea>
          
          <button type="submit" style={{ padding: '15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' }}>
            Xác Nhận Đặt Hàng
          </button>

        </form>
      </div>

    </div>
  );
}

export default Cart;