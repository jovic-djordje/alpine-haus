import { Link } from "react-router-dom";
import "./home.style.css";

const Home = () => {
  return (
    <section className="hero-section">
      <div className="hero-section-holder">
        <h1 className="hero-title">Experience true alpine hospitality</h1>
        <p className="hero-text">
          Indluge in authentic <span>austrian-german</span> cuisine that warms
          the heart and soul. Join us in a cozy, rustic setting that feels like
          home.
        </p>
        <div className="hero-btn-holder">
          <Link to="/menu" className="hero-link">
            <button className=" hero-btn hero-menu-btn">View Menu</button>
          </Link>
          <Link className="hero-link">
            <button className="hero-btn">Reserve</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
