import { useState } from "react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/portfolio/living.jpg";
import img2 from "../assets/portfolio/bedroom.jpg";
import img3 from "../assets/portfolio/kitchen.jpg";
import img4 from "../assets/portfolio/office.jpg";
import img6 from "../assets/portfolio/chair.jpg";
import img5 from "../assets/portfolio/bathroom.jpg";

function Portfolio() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    { image: img1, title: "Residential Living", category: "Residential" },
    { image: img2, title: "Modern Bedroom", category: "Bedroom" },
    { image: img3, title: "Luxury Kitchen", category: "Kitchen" },
    { image: img4, title: "Corporate Office", category: "Commercial" },
    { image: img5, title: "Minimal Bathroom", category: "Bathroom" },
    { image: img6, title: "Designer Furniture", category: "Residential" }
  ];

  const filters = [
    "All",
    "Residential",
    "Commercial",
    "Bedroom",
    "Kitchen",
    "Bathroom"
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <section className="portfolio" id="portfolio">
      <h2>Our Portfolio</h2>
      <p className="portfolio-sub">
        Explore our latest projects and see how we’ve transformed spaces.
      </p>

      {/* FILTER BUTTONS */}
      <div className="portfolio-filters">
        {filters.map(filter => (
          <button
            key={filter}
            className={activeFilter === filter ? "active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* PORTFOLIO GRID */}
      <div className="portfolio-grid">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="portfolio-card"
            onClick={() => navigate("/contact")}
          >
            <img src={project.image} alt={project.title} />
            <div className="portfolio-overlay">
              <span>{project.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;