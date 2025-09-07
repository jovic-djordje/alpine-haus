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
              <p>Level 1, 12 sample st, sydney </p>
            </div>

            <div className="footer-info-holder">
              <h5>Contact:</h5>
              <p>1800 1234 4567 | info@alpinehaus.com</p>
            </div>

            <div className="footer-social-media-holder">
              <FiFacebook className="footer-icon" />
              <FiInstagram className="footer-icon" />
            </div>
          </div>

          <div className="footer-right-side">
            <div className="web-pages">
              <Link to="/menu" className="footer-link">
                View menu
              </Link>
              <Link to="/about#contact" className="footer-link">
                Contact us
              </Link>
              <Link to="/reserve" className="footer-link">
                Reserve
              </Link>
              <Link to="/about" className="footer-link">
                About us
              </Link>
            </div>

            <div className="hours">
              <span>hours</span>
              <p>Mon to Fri: 08am - 22pm</p>
              <p>Sat: 08am - 22pm</p>
              <p>Sun: 08am - 16pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="attribute">
        <div className="copyright">
          <p>
            ©2025 alpine haus. All <span>rights reserved.</span>
          </p>
        </div>

        <div className="code">
          <p>
            Coded by <span>djordje</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
