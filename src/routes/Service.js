import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Aboutimg from "../assets/road.jpg";
import Footer from "../components/footer.js";
import Trip from "../components/Trip.js";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg="https://cdn.wallpapersafari.com/5/98/GwkZ87.jpg"
        title=" Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
