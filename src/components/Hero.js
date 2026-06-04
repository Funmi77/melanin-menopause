import heroImage from "../images/hero-image.jpg";

function Hero() {
  return (
    <div className="hero section" id="home">
      <img
        src={heroImage}
        alt="Black woman wellness and self-care"
        className="hero-image"
      />

      <h1>Understanding Menopause in Black Women</h1>
      <p>
        A simple, supportive space to help you understand perimenopause and
        menopause symptoms, especially those often overlooked in Black women.
      </p>
      <button
        onClick={() =>
          document
            .getElementById("symptoms")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore Symptoms
      </button>
    </div>
  );
}

export default Hero;
