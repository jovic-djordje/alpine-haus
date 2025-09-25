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
              <p>
                <a
                  href="https://www.google.com/maps/place/Alpine+House/@39.3857594,-107.0827341,143m/data=!3m1!1e3!4m12!1m5!3m4!2zMznCsDIzJzA4LjkiTiAxMDfCsDA0JzU4LjEiVw!8m2!3d39.3857921!4d-107.0828019!3m5!1s0x8741b361c6ac75fb:0x969c0c82d693cee2!8m2!3d39.3856694!4d-107.0826002!16s%2Fg%2F11x_fn3_1h?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  351 Market St, Basalt, CO 81621, United States
                </a>
              </p>
            </div>

            <div className="footer-info-holder">
              <h5>Contact:</h5>
              <p>
                <a href="tel:+19702795107">+1 970-279-5107</a> -{" "}
                <a href="mailto:alpinehouse2025@gmail.com">
                  alpinehouse2025@gmail.com
                </a>
              </p>
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
