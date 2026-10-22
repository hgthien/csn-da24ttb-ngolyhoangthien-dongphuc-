import { FiBox, FiShield, FiMapPin, FiBookOpen } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: '#000000', color: '#ffffff', paddingTop: '50px', marginTop: 'auto' }}>
      
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '30px', 
        padding: '0 40px 40px', 
        borderBottom: '1px solid #333' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FiBox size={32} color="#fff" />
          <div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '700', textTransform: 'uppercase' }}>Miễn phí ship</h4>
            <span style={{ fontSize: '13px', color: '#999' }}>Toàn quốc</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FiShield size={32} color="#fff" />
          <div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '700', textTransform: 'uppercase' }}>Bảo hành</h4>
            <span style={{ fontSize: '13px', color: '#999' }}>365 ngày</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FiMapPin size={32} color="#fff" />
          <div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '700', textTransform: 'uppercase' }}>Địa chỉ</h4>
            <span style={{ fontSize: '13px', color: '#999' }}>Cửa hàng TVU.vn</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <FiBookOpen size={32} color="#fff" />
          <div>
            <h4 style={{ margin: '0 0 5px 0', fontSize: '15px', fontWeight: '700', textTransform: 'uppercase' }}>Tạp chí</h4>
            <span style={{ fontSize: '13px', color: '#999' }}>Thông tin thời trang</span>
          </div>
        </div>
      </div>

      <div style={{ 
        maxWidth: '1200px', 
        margin: '40px auto', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '30px', 
        padding: '0 40px' 
      }}>
        <div>
          <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Đồng Phục</h4>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Áo Thun Cổ Tròn</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Áo Polo Công Sở</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Quần Tây Nam/Nữ</p>
        </div>
        
        <div>
          <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Phụ Kiện</h4>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Nón Kết Đồng Phục</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Túi Tote - Balo</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Bảng Tên Tự Thiết Kế</p>
        </div>

        <div>
          <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Chính Sách</h4>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Điều Khoản Dịch Vụ</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Chính Sách Bảo Mật</p>
          <p style={{ margin: '0 0 12px 0', fontSize: '13px', color: '#aaa', cursor: 'pointer' }}>Khách Hàng VIP</p>
        </div>
      </div>

      <div style={{ backgroundColor: '#111111', padding: '20px', textAlign: 'center', color: '#777' }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '13px', fontWeight: 'bold', color: '#999' }}>
          © 2026 Website Bán Đồng Phục. Đồ án cơ sở ngành.
        </p>
        <p style={{ margin: 0, fontSize: '12px' }}>
          Sinh viên: Ngô Lý Hoàng Thiện - Hotline: 0921.465.246 - Email: hoangthien.28122006@gmail.com
        </p>
      </div>

    </footer>
  );
}

export default Footer;