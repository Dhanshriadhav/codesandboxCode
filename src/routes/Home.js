import Destination from "../components/Destination.js";
import Footer from "../components/footer.js";
import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Trip from "../components/Trip.js";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroimg="https://cutewallpaper.org/28/control-wallpaper-vertical-hd/795830246.jpg"
        title=" Your Destination Our Journey"
        text=" with perfect journey as you planned "
        url="/"
        btnClass="show"
        buttonText="Make Choice"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
