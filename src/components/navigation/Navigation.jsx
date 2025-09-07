import { Logo } from "../../assets/images";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import "./navigation.style.css";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const showMenu = () => {
    setMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [menu]);

  return (
    <header id="top">
      <div className="header-holder">
        <Link to="/" onClick={closeMenu}>
          <Logo className="logo" />
        </Link>
        <nav className="nav-holder">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/about" className="nav-item">
            About Us
          </Link>
          <Link to="/menu" className="nav-item">
            Menu
          </Link>
          <Link to="/specials" className="nav-item">
            Specials
          </Link>
        </nav>
        <div className="btn-nav-holder">
          <Link to="/reserve" className="nav-btn-link" onClick={closeMenu}>
            <button className="nav-btn">Reserve</button>
          </Link>

          <nav className="mobile-nav" onClick={showMenu}>
            <div className={`ham-menu${menu ? " active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>

        <div className={`off-screen-menu${menu ? " active" : ""}`}>
          <ul className="off-screen-list">
            <Link to="/" className="mobile-nav-item" onClick={showMenu}>
              Home
            </Link>
            <Link to="/about" className="mobile-nav-item" onClick={showMenu}>
              About Us
            </Link>
            <Link to="/menu" className="mobile-nav-item" onClick={showMenu}>
              Menu
            </Link>
            <Link to="/specials" className="mobile-nav-item" onClick={showMenu}>
              Specials
            </Link>
            <Link
              to="/about#contact"
              className="mobile-nav-item"
              onClick={showMenu}
            >
              Contact Us
            </Link>
          </ul>

          <div className="footer-social-media-holder nav-social-media-holder">
            <FiFacebook className="footer-icon nav-icon" />
            <FiInstagram className="footer-icon nav-icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
