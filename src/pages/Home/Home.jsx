import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import "./home.style.css";
import { AboutImage } from "../../assets/images";

const Home = () => {
  return (
    <main>
      <section className="hero-section">
        <div className="hero-section-holder">
          <h1 className="hero-title">Experience true alpine hospitality</h1>
          <p className="hero-text">
            Indluge in authentic <span>austrian-german</span> cuisine that warms
            the heart and soul. Join us in a cozy, rustic setting that feels
            like home.
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

      <section className="about-section">
        <div className="about-section-holder section-holder">
          <div className="about-section-text-holder">
            <h2 className="about-section-title">
              Experience authentic alpine hospitality <span>at</span> alpine
              haus
            </h2>
            <p className="about-section-text">
              At <span>alpine haus</span>, we celebrate our rich{" "}
              <span>Austrian</span> heritage through every dish we serve. Our
              inviting atmosphere and friendly staff ensure that every visit
              feels like coming home.
            </p>
            <div className="about-btn-holder">
              <Link to="/about" className="hero-link about-link">
                <button className="about-btn">Read More</button>
              </Link>

              <Link className="hero-link about-link">
                <button className=" about-btn about-contact-btn">
                  Contact <IoIosArrowForward className="about-btn-icon" />
                </button>
              </Link>
            </div>
          </div>
          <AboutImage className="about-section-img" />
        </div>
      </section>
    </main>
  );
};

export default Home;
