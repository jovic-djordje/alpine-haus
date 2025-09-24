import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import "./home.style.css";
import {
  AboutImage,
  AppMealOne,
  FeaturesFirstDish,
  FeaturesSecondDish,
  FeaturesThirdDish,
  MainMealOne,
  MainMealThree,
  MainMealTwo,
  SaladOne,
} from "../../assets/images";

const Home = () => {
  const dishes = [
    {
      id: 1,
      image: <FeaturesFirstDish className="features-img" />,
      text: "Wiener Schnitzel",
    },
    {
      id: 2,
      image: <FeaturesSecondDish className="features-img" />,
      text: "Wings",
    },
    {
      id: 3,
      image: <FeaturesThirdDish className="features-img" />,
      text: "Bavarian Pretzel",
    },
  ];

  const contacts = [
    {
      id: 1,
      icon: <FiMail className="contact-section-icon" />,
      info: "alpinehouse2025@gmail.com",
      text: "Reach out for private dining, events, or inquiries",
    },
    {
      id: 2,
      icon: <FiSmartphone className="contact-section-icon" />,
      info: "+1 970-279-5107",
      text: "We are here to arrange your reservation with care.",
    },

    {
      id: 3,
      icon: <FiMapPin className="contact-section-icon" />,
      info: "351 Market St, Basalt, CO 81621, United States",
      text: "Join us at our address and indulge in a refined experience.",
    },
  ];
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
            <Link to="/reserve" className="hero-link">
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
              house
            </h2>
            <p className="about-section-text">
              At <span>alpine house</span>, we celebrate our rich{" "}
              <span>Austrian</span> heritage through every dish we serve. Our
              inviting atmosphere and friendly staff ensure that every visit
              feels like coming home.
            </p>
            <div className="about-btn-holder">
              <Link to="/about" className="hero-link about-link">
                <button className="about-btn">Read More</button>
              </Link>

              <Link to="/about#contact" className="hero-link about-link">
                <button className=" about-btn about-contact-btn">
                  Contact <IoIosArrowForward className="about-btn-icon" />
                </button>
              </Link>
            </div>
          </div>
          <AboutImage className="about-section-img-home-page" />
        </div>
      </section>

      <section className="features-section">
        <div className="features-section-holder section-holder">
          <div className="features-section-text-holder">
            <h4>delicious</h4>
            <h2 className="feauters-section-title">
              Taste <span>the</span> heart <span>of</span> alpine cuisine
            </h2>
            <p className="features-section-text">
              At <span>alpine house</span>, we bring you the essence of
              traditional <span>austrian-german</span> dishes, crafted with love
              and authenticity. Join us for a culinary journey that warms the
              heart and soul.
            </p>
          </div>

          <div className="feauters-section-card-holder">
            {dishes.map((dish) => (
              <div className="features-card" key={dish.id}>
                {dish.image}
                <p className="features-card-text">{dish.text}</p>
              </div>
            ))}
          </div>

          <Link to="/menu" className="features-link">
            <button className="features-btn">View Menu</button>
          </Link>
        </div>
      </section>

      <section className="reserve-section">
        <div className="reserve-section-holder section-holder">
          <div className="reserve-section-text-holder">
            <h2 className="reserve-section-title">reserve your table today</h2>
            <p className="reserve-section-text">
              Experience the warmth of <span>alpine</span> hospitality. Book
              your table for an unforgettable dining experience.
            </p>
            <Link to="/reserve#reserve" className="reserve-link">
              <button className="reserve-btn">Book Now</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-section-holder section-holder">
          {contacts.map((contact) => (
            <div className="contact-section-card" key={contact.id}>
              <div className="contact-section-card-width">
                <div className="contact-section-card-icon-holder">
                  {contact.icon}
                  <h4 className="contact-section-card-title">{contact.info}</h4>
                </div>
                <p className="contact-section-card-text">{contact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
