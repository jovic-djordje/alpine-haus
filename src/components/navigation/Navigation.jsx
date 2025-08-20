import { Logo } from "../../assets/images";
import { Link } from "react-router-dom";
import "./navigation.style.css";

const Navigation = () => {
  return (
    <header>
      <div className="header-holder">
        <Logo className="logo" />
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
          <Link to="/contact" className="nav-item">
            Contact Us
          </Link>
        </nav>
        <div className="btn-nav-holder">
          <button className="nav-btn">Reserve</button>

          <nav className="mobile-nav">
            <div className="ham-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>

        <div className="off-screen-menu active">
          <ul className="off-screen-list">
            <Link to="/" className="nav-item">
              Home
            </Link>
            <Link to="/about" className="nav-item">
              About Us
            </Link>
            <Link to="/menu" className="nav-item">
              Menu
            </Link>
            <Link to="/contact" className="nav-item">
              Contact Us
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
