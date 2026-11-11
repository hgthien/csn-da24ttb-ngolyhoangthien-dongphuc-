import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; 
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; 
import { FiSearch, FiShoppingBag, FiUser, FiPhoneCall } from "react-icons/fi"; 
import { AiOutlineAppstore } from "react-icons/ai"; 

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  const calculateCartCount = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = savedCart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };

  useEffect(() => {
    calculateCartCount();
    window.addEventListener('cartUpdated', calculateCartCount);
    return () => window.removeEventListener('cartUpdated', calculateCartCount);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="topbar-content">
          <span>Xưởng Sản Xuất & Thiết Kế Đồng Phục Theo Yêu Cầu THIEN.VN</span>
          <span className="topbar-hotline">
            <FiPhoneCall size={13} /> Hotline đặt may: <strong>0921.465.246</strong> (Chiết khấu 25% cho Lớp & Công ty)
          </span>
        </div>
      </div>

      <header className="header-container">
        <div className="header-inner">
          <div className="header-left">
            <button className="icon-btn mobile-only" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
            </button>

            <Link to="/" className="brand-link" onClick={closeMobileMenu}>
              <div className="logo-box">
                <img src="/logo_wdp.png" alt="THIEN Logo" className="logo-img" />
              </div>
              <span className="brand-name">THIEN<span>.VN</span></span>
            </Link>
          </div>

          <nav className="center-menu desktop-only">
            <Link to="/" className="menu-link">TRANG CHỦ</Link>
            <Link to="/san-pham" className="menu-link">TẤT CẢ ĐỒNG PHỤC</Link>
            <Link to="/san-pham?category=ao-lop" className="menu-link">ÁO LỚP</Link>
            <Link to="/san-pham?category=ao-cong-so" className="menu-link">ÁO CÔNG SỞ</Link>
            <Link to="/san-pham?category=ao-nhom" className="menu-link">ÁO NHÓM - GIA ĐÌNH</Link>
            <Link to="/san-pham?category=mau-in" className="menu-link">MẪU IN</Link>
          </nav>

          <div className="header-right">
            <button className="icon-btn" onClick={() => { closeMobileMenu(); navigate('/tim-kiem'); }}>
              <FiSearch size={20} />
            </button>

            <Link to="/tai-khoan" className="icon-btn" onClick={closeMobileMenu}>
              <FiUser size={20} />
            </Link>

            <Link to="/gio-hang" className="icon-btn cart-icon-wrapper" onClick={closeMobileMenu}>
              <FiShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <nav className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="drawer-title">DANH MỤC ĐỒNG PHỤC</span>
              <button className="drawer-close-btn" onClick={closeMobileMenu}>
                <HiOutlineX size={24} />
              </button>
            </div>
            <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>TRANG CHỦ</Link>
            <Link to="/san-pham" className="mobile-menu-link" onClick={closeMobileMenu}>TẤT CẢ ĐỒNG PHỤC</Link>
            <Link to="/san-pham?category=ao-lop" className="mobile-menu-link" onClick={closeMobileMenu}>ÁO LỚP</Link>
            <Link to="/san-pham?category=ao-cong-so" className="mobile-menu-link" onClick={closeMobileMenu}>ÁO CÔNG SỞ</Link>
            <Link to="/san-pham?category=ao-nhom" className="mobile-menu-link" onClick={closeMobileMenu}>ÁO NHÓM - GIA ĐÌNH</Link>
            <Link to="/san-pham?category=mau-in" className="mobile-menu-link" onClick={closeMobileMenu}>MẪU IN</Link>
          </nav>
        </div>
      )}

      <nav className="bottom-nav mobile-only">
        <Link to="/san-pham" className="bottom-nav-item" onClick={closeMobileMenu}>
          <AiOutlineAppstore size={22} />
          <span>Danh mục</span>
        </Link>
        <Link to="/tai-khoan" className="bottom-nav-item" onClick={closeMobileMenu}>
          <FiUser size={22} />
          <span>Cá nhân</span>
        </Link>
        <Link to="/gio-hang" className="bottom-nav-item" onClick={closeMobileMenu}>
          <FiShoppingBag size={22} />
          <span>Giỏ hàng ({cartCount})</span>
        </Link>
      </nav>
    </>
  );
}

export default Header;