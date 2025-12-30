import aboutImg from "../assets/about.jpg";
import { FaAward, FaUsers, FaCheckCircle } from "react-icons/fa";

function AboutHighlight() {
  return (
    <section className="about-highlight" id="about">
      <div className="about-left">
        <h2>About Interio</h2>

        <p>
          With over 15 years of experience in interior design, we specialize in
          creating spaces that are both beautiful and functional. Our team
          works closely with clients to bring their vision to life.
        </p>

        <p>
          We believe great design should be accessible to everyone, whether
          you're renovating a single room or your entire home.
        </p>

        <div className="about-stats">
          <div className="stat">
            <FaAward />
            <h3>15+</h3>
            <span>Years of Excellence</span>
          </div>

          <div className="stat">
            <FaUsers />
            <h3>500+</h3>
            <span>Happy Clients</span>
          </div>

          <div className="stat">
            <FaCheckCircle />
            <h3>750+</h3>
            <span>Projects Completed</span>
          </div>
        </div>
      </div>

      <div className="about-right">
        <img src={aboutImg} alt="Interior design" />
      </div>
    </section>
  );
}

export default AboutHighlight;