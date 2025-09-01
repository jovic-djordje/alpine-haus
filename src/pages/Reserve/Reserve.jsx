import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import "./reserve.style.css";

const Reserve = () => {
  return (
    <main>
      <section className="reserve-hero-section">
        <div className="reserve-hero-holder section-holder">
          <h1 className="reserve-hero-title">Book your table</h1>
          <p className="reserve-hero-text">
            Join us at <span>alpine haus</span> for an unforgettable dining
            experience filled with authentic flavors and warmth.
          </p>
        </div>
      </section>

      <section className="contact-section reserve-contact-section">
        <div className="about-page-contact-section-holder section-holder reserve-contact-section-holder">
          <div className="form-text-holder reserve-form-text-holder">
            <h4>Reservation</h4>
            <h2 className="form-title">
              Get <span>in</span> touch
            </h2>
            <p className="form-text ">
              We're here to help with your event planning.
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
                <label htmlFor="phone-input">Phone Number</label>
                <input
                  type="number"
                  id="phone-input"
                  min={0}
                  onChange={handleChange}
                />
              </div>

              <div className="inputs-holder">
                <label htmlFor="email-input">Email</label>
                <input type="email" id="email-input" />
              </div>

              <div className="date-time-holder">
                <div className="inputs-holder">
                  <label htmlFor="date-input">Date</label>
                  <input type="date" id="date-input" />
                </div>

                <div className="inputs-holder">
                  <label htmlFor="time-input">Time</label>
                  <input type="time" id="time-input" />
                </div>
              </div>

              <div className="inputs-holder">
                <label htmlFor="number-of-ppl-input">Number of People</label>
                <input
                  type="number"
                  id="number-of-ppl-input"
                  min={1}
                  max={10}
                />
              </div>

              <div className="inputs-holder">
                <label htmlFor="message-input">Message</label>
                <textarea
                  name="text-area"
                  id="message-input"
                  placeholder="Any special requests?"
                ></textarea>
              </div>
              <button className="form-btn reserve-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Reserve;
