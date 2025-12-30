import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [hideNav, setHideNav] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Mobile only
    if (window.innerWidth <= 360) {
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setHideNav(true);   // scrolling down
      } else {
        setHideNav(false);  // scrolling up
      }
    }

    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${hideNav ? "hide" : ""}`}>
      <div className="logo">
        <Link to="/" className="interio">Interio</Link>
      </div>

      <div className="menu">
        <button onClick={() => handleScrollTo("home")} className="navbtn">
          Home
        </button>
        <button onClick={() => handleScrollTo("about")} className="navbtn">
          About
        </button>
        <button onClick={() => handleScrollTo("services")} className="navbtn">
          Services
        </button>
        <button onClick={() => handleScrollTo("portfolio")} className="navbtn">
          Projects
        </button>
        <button onClick={() => handleScrollTo("testimonials")} className="navbtn">
          Testimonials
        </button>

        <Link to="/contact" className="contact-btn">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;