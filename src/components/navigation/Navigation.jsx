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
            <a
              href="https://www.instagram.com/alpine_house_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <FiInstagram className="footer-icon nav-icon" />
            </a>
          </div>

          <div className="nav-info-holder">
            <h5>Address:</h5>
            <a
              href="https://www.google.com/maps/place/Alpine+House/@39.3857594,-107.0827341,143m/data=!3m1!1e3!4m12!1m5!3m4!2zMznCsDIzJzA4LjkiTiAxMDfCsDA0JzU4LjEiVw!8m2!3d39.3857921!4d-107.0828019!3m5!1s0x8741b361c6ac75fb:0x969c0c82d693cee2!8m2!3d39.3856694!4d-107.0826002!16s%2Fg%2F11x_fn3_1h?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              351 Market St, Basalt, CO 81621, United States
            </a>
          </div>

          <div className="nav-info-holder">
            <h5>Contact:</h5>
            <a href="tel:+19702795107">+1 970-279-5107</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
