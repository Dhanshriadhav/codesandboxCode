import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";
import Aboutimg from "../assets/paris.jpg";
import Footer from "../components/footer.js";
import ContactForm from "../components/ContactForm.js";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimg="https://hldak.mmtcdn.com/prod-s3-hld-hpcmsadmin/holidays/images/cities/3067/Wooded%20bridge.jpg"
        title=" Contact Us"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}

export default Contact;
