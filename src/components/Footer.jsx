import { Link } from 'react-router-dom';
import { FiBox, FiShield, FiMapPin, FiBookOpen } from 'react-icons/fi';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        
        <div className="footer-features">
          <div className="feature-box">
            <FiBox size={26} className="feature-icon" />
            <div>
              <div className="feature-title">MIỄN PHÍ SHIP</div>
              <div className="feature-sub">Đơn hàng tập thể toàn quốc</div>
            </div>
          </div>

          <div className="feature-box">
            <FiShield size={26} className="feature-icon" />
            <div>
              <div className="feature-title">BẢO HÀNH 365 NGÀY</div>
              <div className="feature-sub">Đổi mới nếu lỗi in thêu</div>
            </div>
          </div>

          <div className="feature-box">
            <FiMapPin size={26} className="feature-icon" />
            <div>
              <div className="feature-title">XƯỞNG TRỰC TIẾP</div>
              <div className="feature-sub">Cửa hàng TVU.vn</div>
            </div>
          </div>

          <div className="feature-box">
            <FiBookOpen size={26} className="feature-icon" />
            <div>
              <div className="feature-title">BẢNG MÀU & SIZE</div>
              <div className="feature-sub">Chuẩn form người Việt</div>
            </div>
          </div>
        </div>

        <div className="footer-links-grid">
          <div>
            <h4 className="footer-heading">DANH MỤC ĐỒNG PHỤC</h4>
            <ul className="footer-list">
              <li><Link to="/san-pham?category=ao-lop">Đồng Phục Áo Lớp Học Sinh</Link></li>
              <li><Link to="/san-pham?category=ao-cong-so">Đồng Phục Công Sở - Doanh Nghiệp</Link></li>
              <li><Link to="/san-pham?category=ao-nhom">Đồng Phục Gia Đình & Team Building</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">DỊCH VỤ IN & THÊU</h4>
            <ul className="footer-list">
              <li><Link to="/san-pham?category=mau-in">In Lụa & In Chuyển Nhiệt</Link></li>
              <li><Link to="/san-pham?category=mau-in">Thêu Vi Tính Logo Sắc Nét</Link></li>
              <li><Link to="/san-pham?category=mau-in">Thiết Kế Mẫu 3D Theo Yêu Cầu</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">CHÍNH SÁCH KHÁCH HÀNG</h4>
            <ul className="footer-list">
              <li>Hướng Dẫn Chọn Size Áo</li>
              <li>Chính Sách Chiết Khấu Tập Thể</li>
              <li>Cam Kết Chất Lượng Vải Cotton</li>
            </ul>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="copyright-title">
          © 2026 Website Bán Đồng Phục THIEN.VN - Đồ án cơ sở ngành
        </div>
        <div className="copyright-info">
          Sinh viên thực hiện: Ngô Lý Hoàng Thiện | MSSV: 110124175 | Lớp: DA24TTB | Hotline: 0921.465.246 | Email: hoangthien.28122006@gmail.com
        </div>
      </div>
    </footer>
  );
}

export default Footer;