import heroImage from "../images/hero-image.jpg";

function Hero() {
  return (
    <div className="hero" id="home">
      <img
        src={heroImage}
        alt="Black woman wellness and self-care"
        className="hero-image"
      />

      <h1>Understanding Menopause in Black Women</h1>
      <p>
        Supporting you through perimenopause and menopause with clear, simple
        information.
      </p>
      <button
        onClick={() =>
          document
            .getElementById("symptoms")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Learn More
      </button>
    </div>
  );
}

export default Hero;
