import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import "./footer.style.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-holder">
        <div className="footer-width-holder">
          <div className="footer-left-side">
            <Link to="/#top">
              {" "}
              <Logo className="footer-logo" />
            </Link>

            <div className="footer-info-holder">
              <h5>Address:</h5>
              <p>351 Market St, Basalt, CO 81621, United States</p>
            </div>

            <div className="footer-info-holder">
              <h5>Contact:</h5>
              <p>+1 970-279-5107 | info@alpinehouse.com</p>
            </div>

            <div className="footer-social-media-holder">
              <a
                href="https://www.instagram.com/alpine_house_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FiInstagram className="footer-icon" />
              </a>
            </div>
          </div>

          <div className="footer-right-side">
            <div className="web-pages">
              <Link to="/menu" className="footer-link">
                View menu
              </Link>
              <Link to="/reserve" className="footer-link">
                Reserve
              </Link>
              <Link to="/about" className="footer-link">
                About us
              </Link>
              <Link to="/specials" className="footer-link">
                Specials
              </Link>
            </div>

            <div className="hours">
              <span>hours</span>
              <p>Mon to Fri: 3:30 - 10pm</p>
              <p>Sat: 9am - 10pm</p>
              <p>Sun: 9am - 3:30pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="attribute">
        <div className="copyright">
          <p>
            ©2025 alpine house. All <span>rights reserved.</span>
          </p>
        </div>

        <div className="code">
          <p>
            Coded by{" "}
            <span>
              <a
                href="https://www.instagram.com/djordjejovic_/"
                target="_blank"
                rel="noopener noreferrer"
              >
                djordje
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
