import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";
import "./reserve.style.css";
import { useState } from "react";

const Reserve = () => {
  const [isOpen, setIsOpen] = useState(null);
  const openAnswer = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    number: "",
    date: "",
    time: "",
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
    //Phone
    if (!input.phone.trim()) newErrors.phone = "This field is required";

    //Number of People
    if (!input.number.trim()) {
      newErrors.number = "This field is required";
    } else if (Number(input.number) > 10) {
      newErrors.number = "Up to 10 people only";
    }

    //Date
    if (!input.date.trim()) {
      newErrors.date = "This field is required";
    } else {
      const currentDate = new Date(input.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (currentDate < today) {
        newErrors.date = "Date cannot be in the past";
      }
    }

    //Time
    if (!input.time.trim()) newErrors.time = "This field is required";

    setErrors(newErrors);
  };

  const faqs = [
    {
      id: 1,
      title: "How can I make a reservation?",
      text: "You can make a reservation through our online form, by phone, or directly at the restaurant.",
    },
    {
      id: 2,
      title: "Can I cancel or modify my reservation?",
      text: "Yes, you can cancel or modify your reservation at least 24 hours before your scheduled time.",
    },
    {
      id: 3,
      title: "How far in advance should I make a reservation?",
      text: "We recommend making reservations at least one day in advance, especially for weekends and holidays.",
    },
    {
      id: 4,
      title: "What if I'm late?",
      text: "If you anticipate being late, please call us. We will hold your table for a reasonable time. However, we cannot guarantee availability after a certain period.",
    },
    {
      id: 5,
      title: "Do you accommodate special occasions?",
      text: "Yes, we can arrange special setups for birthdays, anniversaries, and celebrations. Please inform us when booking.",
    },
  ];

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
        <div
          className="about-page-contact-section-holder section-holder reserve-contact-section-holder "
          id="reserve"
        >
          <div className="form-text-holder reserve-form-text-holder ">
            <h4>Reservation</h4>
            <h2 className="form-title">
              Get <span>in</span> touch
            </h2>
            <p className="form-text ">
              We're here to help with your event planning.
            </p>
            <div className="contact-info-holder">
              <p className="contact-info ">
                <a href="mailto:alpinehouse2025@gmail.com">
                  {" "}
                  <FiMail /> alpinehouse2025@gmail.com
                </a>
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

          <div className="form-holder ">
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
                  value={input.name}
                  onChange={handleInput}
                  style={{ outline: errors.name ? "1px solid red" : "none" }}
                />
              </div>

              <div className="inputs-holder">
                <div className="label-holder">
                  <label htmlFor="phone-input">Phone Number</label>
                  {errors.phone && <p>{errors.phone}</p>}
                </div>
                <input
                  type="number"
                  id="phone-input"
                  min={0}
                  name="phone"
                  value={input.phone}
                  onChange={handleInput}
                  style={{ outline: errors.phone ? "1px solid red" : "none" }}
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
                  value={input.email}
                  onChange={handleInput}
                  style={{
                    outline: errors.email ? "1px solid red" : "none",
                  }}
                />
              </div>

              <div className="date-time-holder">
                <div className="inputs-holder">
                  <div className="label-holder">
                    <label htmlFor="date-input">Date</label>
                    {errors.date && <p>{errors.date}</p>}
                  </div>
                  <input
                    type="date"
                    id="date-input"
                    name="date"
                    value={input.date}
                    onChange={handleInput}
                    style={{ outline: errors.date ? "1px solid red" : "none" }}
                  />
                </div>

                <div className="inputs-holder">
                  <div className="label-holder">
                    <label htmlFor="time-input">Time</label>
                    {errors.time && <p>{errors.time}</p>}
                  </div>
                  <input
                    type="time"
                    id="time-input"
                    name="time"
                    value={input.time}
                    onChange={handleInput}
                    style={{ outline: errors.time ? "1px solid red" : "none" }}
                  />
                </div>
              </div>

              <div className="inputs-holder">
                <div className="label-holder">
                  <label htmlFor="number-of-ppl-input">Number of People</label>
                  {errors.number && <p>{errors.number}</p>}
                </div>
                <input
                  type="number"
                  id="number-of-ppl-input"
                  name="number"
                  value={input.number}
                  onChange={handleInput}
                  style={{ outline: errors.number ? "1px solid red" : "none" }}
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

      <section className="faq-section">
        <div className="faq-section-holder section-holder">
          <div className="faq-section-text-holder">
            <h2 className="faq-section-title">
              Faq<span>s</span>
            </h2>
            <p className="faq-section-text">
              Find answers to common questions about reservations, cancellations
              and special accommodations.
            </p>
          </div>

          <div className="faq-holder">
            {faqs.map((faq) => (
              <div className="faq-text-holder" key={faq.id}>
                <div className="faq-question-holder">
                  <p className="faq-question">{faq.title}</p>

                  {isOpen === faq.id ? (
                    <HiOutlineMinus
                      className="faq-icon"
                      onClick={() => openAnswer(faq.id)}
                    />
                  ) : (
                    <HiOutlinePlus
                      className="faq-icon"
                      onClick={() => openAnswer(faq.id)}
                    />
                  )}
                </div>

                <p className={`faq-answer ${isOpen === faq.id ? "open" : ""}`}>
                  {faq.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
export default Reserve;
