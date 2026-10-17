import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; 
import { HiOutlineMenu } from "react-icons/hi"; 
import { FiSearch, FiShoppingBag, FiUser, FiChevronDown } from "react-icons/fi"; 
import { AiOutlineAppstore } from "react-icons/ai"; 

function Header() {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate('/tim-kiem');
  };

  return (
    <>
      <header className="header-container">
        <div className="header-left">
          <button className="icon-btn mobile-only">
            <HiOutlineMenu size={24} color="#111" />
          </button>

          <Link to="/" className="brand-link">
            <img src="/logo-tvu.png" alt="TVU Logo" className="logo-img" />
            <span className="brand-name desktop-only-text">TVU.vn</span>
          </Link>
        </div>

        <nav className="center-menu desktop-only">
          <Link to="/san-pham" className="menu-link">
            SALE <FiChevronDown size={14} />
          </Link>
          <Link to="/san-pham" className="menu-link">
            ÁO ĐỒNG PHỤC <FiChevronDown size={14} />
          </Link>
          <Link to="/san-pham" className="menu-link">
            QUẦN ĐỒNG PHỤC <FiChevronDown size={14} />
          </Link>
          <Link to="/san-pham" className="menu-link">
            PHỤ KIỆN <FiChevronDown size={14} />
          </Link>
          <Link to="/san-pham" className="menu-link">
            VIP
          </Link>
        </nav>

        <div className="header-right">
          <button className="icon-btn" onClick={handleSearchClick}>
            <FiSearch size={20} color="#111" />
          </button>

          <button className="icon-btn desktop-only">
            <FiUser size={20} color="#111" />
          </button>

          <Link to="/gio-hang" className="icon-btn">
            <FiShoppingBag size={20} color="#111" />
          </Link>
        </div>
      </header>

      <nav className="bottom-nav mobile-only">
        <Link to="/san-pham" className="bottom-nav-item">
          <AiOutlineAppstore size={22} color="#111" />
          <span>Danh mục</span>
        </Link>
        
        <Link to="/" className="bottom-nav-item">
          <FiUser size={22} color="#111" />
          <span>Cá nhân</span>
        </Link>
      </nav>
    </>
  );
}

export default Header;