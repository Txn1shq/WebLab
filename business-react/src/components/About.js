import { FaHandshake, FaLightbulb, FaClock, FaAward } from "react-icons/fa";

function About() {
  return (
    <section className="why-choose">
      <h2>Why Choose Us</h2>
      <p className="why-sub">
        We combine experience, creativity, and reliability to deliver spaces
        our clients love.
      </p>

      <div className="why-cards">
        <div className="why-card">
          <FaHandshake />
          <h3>Client-Centric</h3>
          <p>We listen carefully and design spaces tailored to your needs.</p>
        </div>

        <div className="why-card">
          <FaLightbulb />
          <h3>Creative Solutions</h3>
          <p>Innovative ideas that balance aesthetics and functionality.</p>
        </div>

        <div className="why-card">
          <FaClock />
          <h3>On-Time Delivery</h3>
          <p>We respect deadlines and deliver projects on schedule.</p>
        </div>

        <div className="why-card">
          <FaAward />
          <h3>Proven Expertise</h3>
          <p>Years of experience with hundreds of successful projects.</p>
        </div>
      </div>
    </section>
  );
}

export default About;