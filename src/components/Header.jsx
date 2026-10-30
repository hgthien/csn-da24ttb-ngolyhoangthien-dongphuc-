import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; 
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; 
import { FiSearch, FiShoppingBag, FiUser, FiChevronDown } from "react-icons/fi"; 
import { AiOutlineAppstore } from "react-icons/ai"; 

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchClick = () => {
    setIsMobileMenuOpen(false);
    navigate('/tim-kiem');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header-container">
        <div className="header-left">
          <button className="icon-btn mobile-only" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <HiOutlineX size={24} color="#111" />
            ) : (
              <HiOutlineMenu size={24} color="#111" />
            )}
          </button>

          <Link to="/" className="brand-link" onClick={closeMobileMenu}>
            <img 
              src="/logo_wdp.png" 
              alt="THIEN Logo" 
              className="logo-img" 
            />
            <span className="brand-name desktop-only-text">Thien Outfitters</span>
          </Link>
        </div>

        <nav className="center-menu desktop-only">
          <Link to="/" className="menu-link">
            TRANG CHỦ
          </Link>
          <Link to="/san-pham?category=ao-lop" className="menu-link">
            ÁO LỚP <FiChevronDown size={14} />
          </Link>
          <Link to="/san-pham?category=ao-cong-so" className="menu-link">
            ÁO CÔNG SỞ <FiChevronDown size={14} />
          </Link>
          <Link to="/san-pham?category=ao-nhom" className="menu-link">
            ÁO NHÓM - GIA ĐÌNH <FiChevronDown size={14} />
          </Link>
          <Link to="/san-pham?category=mau-in" className="menu-link">
            MẪU IN
          </Link>
        </nav>

        <div className="header-right">
          <button className="icon-btn" onClick={handleSearchClick}>
            <FiSearch size={20} color="#111" />
          </button>

          <button className="icon-btn desktop-only">
            <FiUser size={20} color="#111" />
          </button>

          <Link to="/gio-hang" className="icon-btn" onClick={closeMobileMenu}>
            <FiShoppingBag size={20} color="#111" />
          </Link>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}>
          <nav className="mobile-menu-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <span className="brand-name" style={{ borderLeft: 'none', paddingLeft: 0 }}>
                DANH MỤC ĐỒNG PHỤC
              </span>
              <button className="icon-btn" onClick={closeMobileMenu}>
                <HiOutlineX size={24} color="#111" />
              </button>
            </div>

            <Link to="/" className="mobile-menu-link" onClick={closeMobileMenu}>
              TRANG CHỦ
            </Link>
            <Link to="/san-pham" className="mobile-menu-link" onClick={closeMobileMenu}>
              TẤT CẢ SẢN PHẨM
            </Link>
            <Link to="/san-pham?category=ao-lop" className="mobile-menu-link" onClick={closeMobileMenu}>
              ÁO LỚP
            </Link>
            <Link to="/san-pham?category=ao-cong-so" className="mobile-menu-link" onClick={closeMobileMenu}>
              ÁO CÔNG SỞ
            </Link>
            <Link to="/san-pham?category=ao-nhom" className="mobile-menu-link" onClick={closeMobileMenu}>
              ÁO NHÓM - GIA ĐÌNH
            </Link>
            <Link to="/san-pham?category=mau-in" className="mobile-menu-link" onClick={closeMobileMenu}>
              MẪU IN
            </Link>
          </nav>
        </div>
      )}

      <nav className="bottom-nav mobile-only">
        <Link to="/san-pham" className="bottom-nav-item" onClick={closeMobileMenu}>
          <AiOutlineAppstore size={22} color="#111" />
          <span>Danh mục</span>
        </Link>
        
        <Link to="/" className="bottom-nav-item" onClick={closeMobileMenu}>
          <FiUser size={22} color="#111" />
          <span>Cá nhân</span>
        </Link>
      </nav>
    </>
  );
}

export default Header;