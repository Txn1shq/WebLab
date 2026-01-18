import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const SERVICES = [
  { id: 1, name: "Modelling", price: 5000 },
  { id: 2, name: "Building Material Advice", price: 7000 },
  { id: 3, name: "Architecture Planning", price: 8000 }
];

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [cart, setCart] = useState([]);
  const [showBill, setShowBill] = useState(true);

  function discount(amount) {
    return amount > 10000 ? amount * 0.1 : 0;
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function toggleService(service) {
    setCart((prev) =>
      prev.find((item) => item.id === service.id)
        ? prev.filter((item) => item.id !== service.id)
        : [...prev, service]
    );
  }

  function clearForm() {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
    setCart([]);
    alert("Thank you for contacting us!");
  }

  function toggleBill() {
    setShowBill(prev => !prev);
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = discount(total);
  const payableAmount = total - discountAmount;

  function handleSubmit(e) {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (!phonePattern.test(formData.phone)) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    fetch("http://localhost:3001/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        selectedServices: cart,
        totalAmount: payableAmount
      })
    })
      .then(res => res.json())
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCart([]);
      })
      .catch(() => alert("Failed to send message"));
  }

  return (
    <section className="contact-page">
      <h2>Get In Touch</h2>
      <p className="contact-sub">
        Ready to transform your space? Contact us today for a consultation.
      </p>

      <div className="contact-container">
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

          <div className="cartservices">
            <h4>Select Services</h4>
            {SERVICES.map((service) => (
              <label key={service.id} className="service-option">
                <span>{service.name}</span>
                <span>₹{service.price}</span>
                <input
                  type="checkbox"
                  checked={cart.some((item) => item.id === service.id)}
                  onChange={() => toggleService(service)}
                />
              </label>
            ))}
          </div>

          <textarea
            name="message"
            placeholder="Tell us about your project..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {cart.length > 0 && (
            <button type="button" className="bill-box-summary"onClick={toggleBill}>
              {showBill ? "Hide Bill Summary" : "Show Bill Summary"}
            </button>
          )}

          {showBill && cart.length > 0 && (
            <div className="bill-box">
              <h4>Bill Summary</h4>

              {cart.map(item => (
                <div key={item.id} className="bill-row">
                  <span>{item.name}</span>
                  <span>₹{item.price}</span>
                </div>
              ))}

              <div className="bill-divider"></div>

              <div className="bill-row">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              <div className="bill-row discount">
                <span>Discount</span>
                <span>- ₹{discountAmount}</span>
              </div>

              <div className="bill-row final">
                <strong>Payable Amount</strong>
                <strong>₹{payableAmount}</strong>
              </div>
            </div>
          )}

          <button type="submit">Send Message</button>
          <button type="button" className="clear-form" onClick={clearForm}>
            Clear Form
          </button>
        </form>

        <div className="contact-info">
          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Visit Us</h4>
              <p>DSCE, Bengaluru, India</p>
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

          <iframe
            title="map"
            src="https://www.google.com/maps?q=Times%20Square&output=embed"
            className="contact-map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div><section className="festival-offers">
  <h2>Christmas & New Year Special Offers</h2>
  <p>
    Celebrate the festive season with exclusive interior design discounts.
    Get up to 20% off on selected services and free consultation.
  </p>
</section></div>
    </section>
    
  );
}

export default ContactPage;