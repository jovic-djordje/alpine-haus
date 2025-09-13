import { Logo } from "../../assets/images";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

import "./navigation.style.css";
import { useState, useEffect } from "react";
import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""} id="top">
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

          <nav className="mobile-nav">
            <div
              className={`ham-menu${menu ? " active" : ""}`}
              onClick={showMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>

        <div className={`off-screen-menu${menu ? " active" : ""}`}>
          <ul className="off-screen-list">
            <Link to="/" className="mobile-nav-item" onClick={closeMenu}>
              Home <IoIosArrowForward />
            </Link>
            <Link to="/about" className="mobile-nav-item" onClick={closeMenu}>
              About Us <IoIosArrowForward />
            </Link>
            <Link to="/menu" className="mobile-nav-item" onClick={closeMenu}>
              Menu <IoIosArrowForward />
            </Link>
            <Link
              to="/specials"
              className="mobile-nav-item"
              onClick={closeMenu}
            >
              Specials <IoIosArrowForward />
            </Link>
            <Link
              to="/about#contact"
              className="mobile-nav-item"
              onClick={closeMenu}
            >
              Contact Us <IoIosArrowForward />
            </Link>
          </ul>

          <span className="hr-line"></span>

          <div className="footer-social-media-holder nav-social-media-holder">
            <FiFacebook className="footer-icon nav-icon" />
            <FiInstagram className="footer-icon nav-icon" />
          </div>

          <div className="nav-info-holder">
            <h5>Address:</h5>
            <p>Level 1, 12 sample st, sydney </p>
          </div>

          <div className="nav-info-holder">
            <h5>Contact:</h5>
            <p>1800 1234 4567 | info@alpinehaus.com</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
