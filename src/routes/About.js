import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Aboutimg from "../assets/paris.jpg";
import Footer from "../components/footer.js";
import Aboutus from "../components/aboutus.js";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg="https://wallpaperaccess.com/full/3214847.jpg"
        title=" About"
        btnClass="hide"
      />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
