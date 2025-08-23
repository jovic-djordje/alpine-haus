import { Link } from "react-router-dom";
import "./about.style.css";

const About = () => {
  return (
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
  );
};

export default About;
