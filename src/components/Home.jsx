import { Link } from 'react-router-dom';
import { FiCheckCircle, FiShield, FiTruck, FiEdit3 } from 'react-icons/fi';
import './Home.css';

function Home() {
  return (
    <div className="home-wrapper">
      
      {/* BANNER CHÍNH NỀN NAVY ĐẬM TÔN 3 ẢNH SẢN PHẨM */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">Xưởng May & Thiết Kế Đồng Phục Theo Yêu Cầu</span>
            <h1 className="hero-title">
              ĐỒNG PHỤC LỚP, CÔNG TY & GIA ĐÌNH CHẤT LƯỢNG CAO
            </h1>
            <p className="hero-desc">
              Miễn phí thiết kế mẫu 3D. Vải Cotton 100% thoáng mát, công nghệ in DTG và thêu vi tính sắc nét. Đặt theo tập thể giảm ngay <strong>25%</strong>
            </p>
            <div className="hero-actions">
              <Link to="/san-pham" className="btn-primary">
                KHÁM PHÁ MẪU ĐỒNG PHỤC
              </Link>
              <Link to="/san-pham?category=mau-in" className="btn-outline">
                XEM MẪU IN & THÊU LOGO
              </Link>
            </div>
          </div>

          <div className="hero-gallery">
            <div className="gallery-card">
              <img src="/images/cat-aolop.jpg" alt="Áo lớp" />
              <span>Áo Lớp</span>
            </div>
            <div className="gallery-card">
              <img src="/images/cat-congso.jpg" alt="Công sở" />
              <span>Công Sở</span>
            </div>
            <div className="gallery-card">
              <img src="/images/cat-giadinh.jpg" alt="Gia đình" />
              <span>Gia Đình</span>
            </div>
          </div>
        </div>
      </section>

      {/* THANH CAM KẾT ĐỒNG BỘ 1 MÀU ICON DUY NHẤT */}
      <section className="commit-bar">
        <div className="commit-container">
          <div className="commit-item">
            <div className="commit-icon"><FiEdit3 size={24} /></div>
            <div>
              <h4>Thiết Kế Demo Miễn Phí</h4>
              <p>Lên mẫu áo & logo theo ý tưởng riêng</p>
            </div>
          </div>
          <div className="commit-item">
            <div className="commit-icon"><FiShield size={24} /></div>
            <div>
              <h4>Bảo Hành In Thêu 12 Tháng</h4>
              <p>Cam kết không bong tróc, phai màu</p>
            </div>
          </div>
          <div className="commit-item">
            <div className="commit-icon"><FiCheckCircle size={24} /></div>
            <div>
              <h4>Đủ Size Từ Trẻ Em Đến 5XL</h4>
              <p>May đo chuẩn form học sinh & văn phòng</p>
            </div>
          </div>
          <div className="commit-item">
            <div className="commit-icon"><FiTruck size={24} /></div>
            <div>
              <h4>Chiết Khấu Cao Cho Tập Thể</h4>
              <p>Đặt từ 10 áo nhận giá gốc tận xưởng</p>
            </div>
          </div>
        </div>
      </section>

      {/* DANH MỤC ĐỒNG PHỤC CHÍNH */}
      <section className="category-section">
        <div className="section-header">
          <div>
            <span className="section-sub">BỘ SƯU TẬP CHỦ LỰC</span>
            <h2 className="section-title">DANH MỤC ĐỒNG PHỤC</h2>
          </div>
          <Link to="/san-pham" className="view-all-link">
            Xem tất cả 16 mẫu &rarr;
          </Link>
        </div>

        <div className="category-grid">
          <Link to="/san-pham?category=ao-lop" className="category-card">
            <div className="category-img-wrap">
              <img src="/images/cat-aolop.jpg" alt="Đồng Phục Áo Lớp" />
              <span className="category-tag">TRƯỜNG HỌC</span>
            </div>
            <div className="category-body">
              <h3>ĐỒNG PHỤC TRƯỜNG HỌC & ÁO LỚP</h3>
              <p>Áo thun oversize, Polo phối cổ in slogan độc quyền cho học sinh - sinh viên.</p>
            </div>
          </Link>

          <Link to="/san-pham?category=ao-cong-so" className="category-card">
            <div className="category-img-wrap">
              <img src="/images/cat-congso.jpg" alt="Đồng Phục Công Sở" />
              <span className="category-tag">DOANH NGHIỆP</span>
            </div>
            <div className="category-body">
              <h3>ĐỒNG PHỤC CÔNG TY - VĂN PHÒNG</h3>
              <p>Áo Polo vải cá sấu, Sơ mi công sở thêu vi tính logo sắc nét, lịch sự.</p>
            </div>
          </Link>

          <Link to="/san-pham?category=ao-nhom" className="category-card">
            <div className="category-img-wrap">
              <img src="/images/cat-giadinh.jpg" alt="Áo Nhóm - Gia Đình" />
              <span className="category-tag">GIA ĐÌNH & NHÓM</span>
            </div>
            <div className="category-body">
              <h3>ĐỒNG PHỤC GIA ĐÌNH & TEAM BUILDING</h3>
              <p>Set áo gia đình đủ size bố mẹ và bé, áo nhóm du lịch biển gắn kết.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* QUY TRÌNH 4 BƯỚC ĐỒNG BỘ TÔNG MÀU */}
      <section className="process-section">
        <div className="process-container">
          <span className="section-sub">DỊCH VỤ CHUYÊN NGHIỆP</span>
          <h2 className="section-title">QUY TRÌNH ĐẶT MAY TẠI THIEN.VN</h2>
          
          <div className="process-grid">
            <div className="process-card">
              <div className="step-num">01</div>
              <h4>Chọn Mẫu & Chất Vải</h4>
              <p>Tham khảo mẫu áo lớp, công sở, gia đình và kiểu in/thêu trên web.</p>
            </div>
            <div className="process-card">
              <div className="step-num">02</div>
              <h4>Thiết Kế & Chốt Size</h4>
              <p>Gửi logo/slogan để xưởng lên bản vẽ 3D miễn phí và chốt bảng size.</p>
            </div>
            <div className="process-card">
              <div className="step-num">03</div>
              <h4>Sản Xuất & In Thêu</h4>
              <p>May đo tại xưởng, in kỹ thuật số hoặc thêu vi tính sắc nét.</p>
            </div>
            <div className="process-card">
              <div className="step-num">04</div>
              <h4>Giao Hàng & Bảo Hành</h4>
              <p>Giao tận nơi toàn quốc, kiểm tra hàng trước khi thanh toán.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;