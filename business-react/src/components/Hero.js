import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      className="hero" id="home"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <h1>We Build Digital Experiences</h1>
      <p>Helping businesses grow with modern solutions.</p>
      <button onClick={() => {
  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
}}>
  Get Started
</button>
    </section>
  );
}

export default Hero;