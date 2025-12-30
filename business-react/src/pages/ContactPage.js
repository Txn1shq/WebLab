import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (!res.ok) {
           throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message. Please try again.");
      });
  }

  return (
    <section className="contact-page">
      <h2>Get In Touch</h2>
      <p className="contact-sub">
        Ready to transform your space? Contact us today for a consultation.
      </p>

      <div className="contact-container">
        {/* LEFT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* RIGHT INFO */}
        <div className="contact-info">
          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Visit Us</h4>
              <p>DSCE, Bengaluru,India</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h4>Call Us</h4>
              <p>+91 987-6543-210</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email Us</h4>
              <p>hello@interio.com</p>
            </div>
          </div>

          {/* MAP */}
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Times%20Square&output=embed"
            className="contact-map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;