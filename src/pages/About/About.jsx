import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { RestaurantInterior } from "../../assets/images";

import { useState } from "react";
import "./about.style.css";

const About = () => {
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });

    //kada korisnik krene kucati greska se brise
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //Email
    if (!input.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!emailRegex.test(input.email)) {
      newErrors.email = "Enter a valid email";
    }

    //Name
    if (!input.name.trim()) newErrors.name = "This field is required";

    //Message
    if (!input.message.trim()) {
      newErrors.message = "This field is required";
    }

    setErrors(newErrors);
  };

  return (
    <main>
      <section className="about-page-hero-section">
        <div className="hero-section-holder">
          <h4>Authenticity</h4>
          <h1 className=" hero-title ">Experience alpine hospitality</h1>
          <p className="hero-text">
            Discover the warmth of <span>austrian-german</span> in a cozy,
            inviting atmosphere at <span>alpine house</span>
          </p>
          <div className="hero-btn-holder">
            <Link to="/menu" className="hero-link">
              <button className=" hero-btn hero-menu-btn">View Menu</button>
            </Link>
            <Link to="/reserve" className="hero-link">
              <button className="hero-btn about-page-hero-btn ">Reserve</button>
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
              At <span>alpine house</span>, we celebrate the rich traditions of{" "}
              {""}
              <span>austrian-german</span> cuisine, bringing authentic flavors
              to life. Our founders' passion for these culinary delights is
              woven into every dish we serve, creating a warm and inviting
              atmosphere for all.
            </p>
            <div className="about-btn-holder about-btn-holder-about-page">
              <Link to="/specials" className="specials-link">
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

      <section className="contact-section" id="contact">
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

                <a href="mailto:alpinehouse2025@gmail.com">
                  {" "}
                  <FiMail /> alpinehouse2025@gmail.com
                </a>

            

              </p>
              <p className="contact-info">
                <a href="tel:+19702795107">
                  {" "}
                  <FiSmartphone /> +1 970-279-5107
                </a>
              </p>
              <p className="contact-info ">
                <a
                  href="https://www.google.com/maps/place/Alpine+House/@39.3857594,-107.0827341,143m/data=!3m1!1e3!4m12!1m5!3m4!2zMznCsDIzJzA4LjkiTiAxMDfCsDA0JzU4LjEiVw!8m2!3d39.3857921!4d-107.0828019!3m5!1s0x8741b361c6ac75fb:0x969c0c82d693cee2!8m2!3d39.3856694!4d-107.0826002!16s%2Fg%2F11x_fn3_1h?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiMapPin />
                  351 Market St, Basalt, CO 81621, United States
                </a>
              </p>
            </div>
          </div>

          <div className="form-holder">
            <form action="" onSubmit={handleSubmit}>
              <div className="inputs-holder">
                <div className="label-holder">
                  <label htmlFor="name-input">Name</label>
                  {errors.name && <p>{errors.name}</p>}
                </div>
                <input
                  type="text"
                  id="name-input"
                  name="name"
                  onChange={handleInput}
                  value={input.name}
                  style={{ outline: errors.name ? "1px solid red" : "none" }}
                />
              </div>

              <div className="inputs-holder">
                <div className="label-holder">
                  <label htmlFor="email-input">Email</label>
                  {errors.email && <p>{errors.email}</p>}
                </div>
                <input
                  type="text"
                  id="email-input"
                  name="email"
                  onChange={handleInput}
                  value={input.email}
                  style={{ outline: errors.email ? "1px solid red" : "none" }}
                />
              </div>

              <div className="inputs-holder">
                <div className="label-holder">
                  <label htmlFor="message-input">Message</label>
                  {errors.message && <p>{errors.message}</p>}
                </div>
                <textarea
                  name="message"
                  id="message-input"
                  placeholder="Type your message..."
                  value={input.message}
                  onChange={handleInput}
                  style={{ outline: errors.message ? "1px solid red" : "none" }}
                ></textarea>
              </div>
              <button className="form-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="location-section-holder section-holder">
          <div className="location-text-holder">
            <h2 className="location-section-title">Location</h2>
            <p className="location-section-text">
              Visit us at our cozy location in <span>basalt, colorado</span>
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7048.138706225096!2d-107.08626702123996!3d39.38250323053942!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8741b361c6ac75fb%3A0x969c0c82d693cee2!2sAlpine%20House!5e1!3m2!1sen!2sba!4v1758527296596!5m2!1sen!2sba"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Alpine House Location"
          ></iframe>
        </div>
      </section>
    </main>
  );
};

export default About;
