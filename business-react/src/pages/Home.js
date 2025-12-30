import Hero from "../components/Hero";
import AboutHighlight from "../components/AboutHighlight";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

function Home() {
  return (
    <>
      <Hero />
      <AboutHighlight />
      <Services />
      <Portfolio />
      <Testimonials />
      <About />
    </>
  );
}

export default Home;