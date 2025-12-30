import {
  FaHome,
  FaBuilding,
  FaPalette,
  FaRulerCombined,
  FaCouch,
  FaLightbulb
} from "react-icons/fa";

function Services() {
  return (
    <section className="services" id="services">
      <h2>Our Services</h2>

      <div className="service-cards">
        <div className="service-card">
          <FaHome className="service-icon" />
          <h3>Residential Design</h3>
          <p>Create the perfect living space with our interior design services.</p>
        </div>

        <div className="service-card">
          <FaBuilding className="service-icon" />
          <h3>Commercial Spaces</h3>
          <p>Transform offices and retail spaces into inspiring environments.</p>
        </div>

        <div className="service-card">
          <FaPalette className="service-icon" />
          <h3>Color Consultation</h3>
          <p>Expert guidance on color schemes that enhance mood.</p>
        </div>

        <div className="service-card">
          <FaRulerCombined className="service-icon" />
          <h3>Space Planning</h3>
          <p>Optimize layouts for maximum functionality and appeal.</p>
        </div>

        <div className="service-card">
          <FaCouch className="service-icon" />
          <h3>Furniture Selection</h3>
          <p>Curated furniture choices that fit your style and budget.</p>
        </div>

        <div className="service-card">
          <FaLightbulb className="service-icon" />
          <h3>Lighting Design</h3>
          <p>Create the perfect ambience with expert lighting solutions.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;