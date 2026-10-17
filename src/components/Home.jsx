import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{ backgroundColor: '#ffffff' }}>
      <div style={{ padding: '14px 40px', fontSize: '14px', color: '#555', borderBottom: '1px solid #f0f0f0' }}>
        <span>Trang chủ</span> &nbsp;&rsaquo;&nbsp; <span style={{ color: '#111' }}>Mở Bán</span>
      </div>

      <div style={{
        position: 'relative',
        width: '100%',
        height: '520px',
        backgroundImage: 'url("https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1600&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0) 100%)'
        }} />

        <div style={{ position: 'relative', zIndex: 1, padding: '0 60px', color: '#ffffff', maxWidth: '550px' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            color: '#111111',
            padding: '6px 18px',
            fontWeight: '700',
            fontSize: '14px',
            letterSpacing: '1px',
            marginBottom: '18px'
          }}>
            MỚI MỞ BÁN
          </div>

          <h2 style={{ fontSize: '38px', fontWeight: '800', margin: '0 0 12px 0', lineHeight: '1.2', letterSpacing: '1px' }}>
            PHONG CÁCH TỐI GIẢN<br />ĐỒNG PHỤC CƠ BẢN
          </h2>

          <p style={{ fontSize: '22px', margin: '0 0 24px 0', fontWeight: '400' }}>
            Đặt theo lớp giảm <strong style={{ color: '#f5b041', fontSize: '42px', display: 'block', marginTop: '4px' }}>25%</strong>
          </p>

          <Link to="/san-pham" style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: '#0056b3',
            color: '#ffffff',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '14px',
            letterSpacing: '0.5px'
          }}>
            XEM BỘ SƯU TẬP
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: '1280px', margin: '40px auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '2px solid #111', paddingBottom: '10px' }}>
          <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#111', textTransform: 'uppercase' }}>
            Danh Mục Đồng Phục
          </h3>
          <Link to="/san-pham" style={{ textDecoration: 'none', color: '#0056b3', fontSize: '14px', fontWeight: '600' }}>
            Xem tất cả &rarr;
          </Link>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          <Link to="/san-pham" style={{ textDecoration: 'none', color: '#111', border: '1px solid #e5e5e5' }}>
            <img 
              src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80" 
              alt="Áo Đồng Phục" 
              style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ padding: '15px', backgroundColor: '#fff' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700' }}>ÁO ĐỒNG PHỤC</h4>
              <span style={{ fontSize: '13px', color: '#666' }}>Áo thun cổ tròn, Áo Polo lớp & công sở</span>
            </div>
          </Link>

          <Link to="/san-pham" style={{ textDecoration: 'none', color: '#111', border: '1px solid #e5e5e5' }}>
            <img 
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80" 
              alt="Quần Đồng Phục" 
              style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ padding: '15px', backgroundColor: '#fff' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700' }}>QUẦN ĐỒNG PHỤC</h4>
              <span style={{ fontSize: '13px', color: '#666' }}>Quần tây học sinh, Quần kaki đồng phục</span>
            </div>
          </Link>

          <Link to="/san-pham" style={{ textDecoration: 'none', color: '#111', border: '1px solid #e5e5e5' }}>
            <img 
              src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80" 
              alt="Đồng Phục VIP" 
              style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} 
            />
            <div style={{ padding: '15px', backgroundColor: '#fff' }}>
              <h4 style={{ margin: '0 0 6px 0', fontSize: '16px', fontWeight: '700' }}>ĐỒNG PHỤC VIP</h4>
              <span style={{ fontSize: '13px', color: '#666' }}>Thiết kế riêng chất liệu cao cấp cho doanh nghiệp</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;