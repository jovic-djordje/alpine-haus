import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { RestaurantInterior } from "../../assets/images";

import "./about.style.css";

const About = () => {
  return (
    <main>
      <section className="about-page-hero-section">
        <div className="hero-section-holder">
          <h4>Authenticity</h4>
          <h1 className="hero-title">Experience alpine hospitality</h1>
          <p className="hero-text">
            Discover the warmth of <span>austrian-german</span> in a cozy,
            inviting atmosphere at <span>alpine haus</span>
          </p>
          <div className="hero-btn-holder">
            <Link to="/menu" className="hero-link">
              <button className=" hero-btn hero-menu-btn">View Menu</button>
            </Link>
            <Link className="hero-link">
              <button className="hero-btn about-page-hero-btn">Reserve</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-holder section-holder">
          <div className="about-section-text-holder">
            <h4>Welcome</h4>
            <h2 className="about-section-title">
              Passion <span>for</span> authentic flavors
            </h2>
            <p className="about-section-text">
              At <span>alpine haus</span>, we celebrate the rich traditions of{" "}
              {""}
              <span>austrian-german</span> cuisine, bringing authentic flavors
              to life. Our founders' passion for these culinary delights is
              woven into every dish we serve, creating a warm and inviting
              atmosphere for all.
            </p>
            <div className="about-btn-holder about-btn-holder-about-page">
              <Link className="specials-link">
                <button className=" about-btn about-contact-btn about-page-btn">
                  Today's Specials
                  <IoIosArrowForward className="about-btn-icon" />
                </button>
              </Link>
            </div>
          </div>
          <RestaurantInterior className="about-section-img" />
        </div>
      </section>
    </main>
  );
};

export default About;
