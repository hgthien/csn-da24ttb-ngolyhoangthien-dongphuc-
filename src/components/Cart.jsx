import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

function Cart() {
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '70vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
      <FiShoppingBag size={80} color="#e5e5e5" style={{ marginBottom: '20px' }} />
      <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111', marginBottom: '10px' }}>
        Giỏ hàng của bạn đang trống
      </h2>
      <p style={{ color: '#666', marginBottom: '30px', fontSize: '15px' }}>
        Hãy tham khảo thêm các mẫu đồng phục mới nhất của chúng tôi.
      </p>
      <Link to="/san-pham" style={{ backgroundColor: '#111', color: '#fff', textDecoration: 'none', padding: '12px 30px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase' }}>
        Tiếp tục mua sắm
      </Link>
    </div>
  );
}

export default Cart;