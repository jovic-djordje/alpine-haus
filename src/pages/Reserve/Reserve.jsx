import { FiSmartphone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import { HiOutlineMinus } from "react-icons/hi";
import { FaCheck } from "react-icons/fa6";
import { useState } from "react";
import { supabase } from "../../library/supabase.js";

import "./reserve.style.css";

const Reserve = () => {
  const [isOpen, setIsOpen] = useState(null);
  const openAnswer = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  const [input, setInput] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    number: "",
    "text-area": "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Tvoja postojeća handleInput funkcija
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Ukloni error kad korisnik počne da kuca
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Validacija
  const validateForm = () => {
    const newErrors = {};

    if (!input.name.trim()) newErrors.name = "Name is required";
    if (!input.phone.trim()) newErrors.phone = "Phone number is required";
    if (!input.email.trim()) newErrors.email = "Email is required";
    if (!input.date) newErrors.date = "Date is required";
    if (!input.time) newErrors.time = "Time is required";
    if (!input.number || input.number < 1)
      newErrors.number = "Number of people is required";

    // Provjeri da li je datum u budućnosti
    const selectedDate = new Date(input.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      newErrors.date = "Please select a future date";
    }

    // Email validacija (ako je unet)
    if (input.email && !/\S+@\S+\.\S+/.test(input.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    try {
      const { data, error } = await supabase.from("reservations").insert([
        {
          name: input.name,
          phone: input.phone,
          email: input.email || null,
          reservation_date: input.date,
          reservation_time: input.time,
          number_of_people: parseInt(input.number),
          special_requests: input["text-area"] || null,
        },
      ]);

      if (error) throw error;

      console.log("Reservation saved:", data);
      setSuccess(true);

      // Resetuj formu
      setInput({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        number: "",
        "text-area": "",
      });
    } catch (error) {
      console.error("Error saving reservation:", error);
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
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
            Join us at <span>alpine house</span> for an unforgettable dining
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
                <a href="tel:+19702795107">
                  {" "}
                  <FiSmartphone /> +1 970-279-5107{" "}
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

          <div className="form-holder ">
            {/* CONDITIONAL RENDERING - Prikaži success message ili formu */}
            {success ? (
              <div className="success-message">
                <h3 className="success-mess-title">
                  <FaCheck className="success-mess-icon" /> Reservation
                  Submitted Successfully!
                </h3>
                <p className="success-mess-text">
                  We'll contact you soon to confirm your booking.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="form-btn reserve-btn"
                >
                  Back to Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {errors.general && (
                  <div
                    className="error-message"
                    style={{ color: "red", marginBottom: "1rem" }}
                  >
                    {errors.general}
                  </div>
                )}

                <div className="inputs-holder">
                  <div className="label-holder">
                    <label htmlFor="name-input">Name</label>
                    {errors.name && (
                      <p style={{ color: "red", fontSize: "0.8rem" }}>
                        {errors.name}
                      </p>
                    )}
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
                    {errors.phone && (
                      <p style={{ color: "red", fontSize: "0.8rem" }}>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <input
                    type="tel"
                    id="phone-input"
                    name="phone"
                    value={input.phone}
                    onChange={handleInput}
                    style={{ outline: errors.phone ? "1px solid red" : "none" }}
                  />
                </div>

                <div className="inputs-holder">
                  <div className="label-holder">
                    <label htmlFor="email-input">Email</label>
                    {errors.email && (
                      <p style={{ color: "red", fontSize: "0.8rem" }}>
                        {errors.email}
                      </p>
                    )}
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
                      {errors.date && (
                        <p style={{ color: "red", fontSize: "0.8rem" }}>
                          {errors.date}
                        </p>
                      )}
                    </div>
                    <input
                      type="date"
                      id="date-input"
                      name="date"
                      value={input.date}
                      onChange={handleInput}
                      min={new Date().toISOString().split("T")[0]}
                      style={{
                        outline: errors.date ? "1px solid red" : "none",
                      }}
                    />
                  </div>

                  <div className="inputs-holder">
                    <div className="label-holder">
                      <label htmlFor="time-input">Time</label>
                      {errors.time && (
                        <p style={{ color: "red", fontSize: "0.8rem" }}>
                          {errors.time}
                        </p>
                      )}
                    </div>
                    <input
                      type="time"
                      id="time-input"
                      name="time"
                      value={input.time}
                      onChange={handleInput}
                      style={{
                        outline: errors.time ? "1px solid red" : "none",
                      }}
                    />
                  </div>
                </div>

                <div className="inputs-holder">
                  <div className="label-holder">
                    <label htmlFor="number-of-ppl-input">
                      Number of People
                    </label>
                    {errors.number && (
                      <p style={{ color: "red", fontSize: "0.8rem" }}>
                        {errors.number}
                      </p>
                    )}
                  </div>
                  <input
                    type="number"
                    id="number-of-ppl-input"
                    name="number"
                    min="1"
                    max="20"
                    inputMode="numeric"
                    onInput={(e) => {
                      e.target.value = e.target.value.replace(/[^0-9]/g, "");
                    }}
                    value={input.number}
                    onChange={handleInput}
                    style={{
                      outline: errors.number ? "1px solid red" : "none",
                    }}
                  />
                </div>

                <div className="inputs-holder">
                  <label htmlFor="message-input">Message</label>
                  <textarea
                    name="text-area"
                    id="message-input"
                    placeholder="Any special requests?"
                    value={input["text-area"]}
                    onChange={handleInput}
                  />
                </div>

                <button
                  type="submit"
                  className="form-btn reserve-btn"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
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
