import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
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

      <section className="contact-section">
        <div className="about-page-contact-section-holder section-holder">
          <div className="form-text-holder">
            <h4>Connect</h4>
            <h2 className="form-title">
              Get <span>in</span> touch
            </h2>
            <p className="form-text">
              We'd love to hear from you! Whether you have questions about our
              menu, want to plan a special celebration, or just want to say
              hello - we're here to help!
            </p>
            <div className="contact-info-holder">
              <p className="contact-info ">
                <FiMail />
                info@alpinehaus.com
              </p>
              <p className="contact-info ">
                <FiSmartphone /> 1800 123 4567
              </p>
              <p className="contact-info ">
                {" "}
                <FiMapPin />
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>
          </div>

          <div className="form-holder">
            <form action="">
              <div className="inputs-holder">
                <label htmlFor="name-input">Name</label>
                <input type="text" id="name-input" />
              </div>

              <div className="inputs-holder">
                <label htmlFor="email-input">Email</label>
                <input type="email" id="email-input" />
              </div>

              <div className="inputs-holder">
                <label htmlFor="message-input">Message</label>
                <textarea
                  name="text-area"
                  id="message-input"
                  placeholder="Type your message..."
                ></textarea>
              </div>
              <button className="form-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
