import "./ContactFormStyle.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Send us message </h1>
      <form>
        <input placeholder="NAME" />
        <input placeholder="DESTINATION" />
        <input placeholder="EMAIL-ID" />
        <input placeholder="PHONE NUMBER" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button> Submit </button>
      </form>
    </div>
  );
}
export default ContactForm;
