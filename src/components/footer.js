import "./footerstyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1> Follow Us </h1>
          <p> choose our destination and come with us </p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-whatsapp-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project </h4>
          <a href="/"> Change log </a>
          <a href="/"> Status </a>
          <a href="/"> Finish </a>
          <a href="/"> Liciense </a>
        </div>
        <div>
          <h4>Community </h4>
          <a href="/"> Issues</a>
          <a href="/"> Projects </a>
          <a href="/"> GitHub </a>
          <a href="/"> Discord</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/"> whatsapp </a>
          <a href="/"> Instagram </a>
          <a href="/"> Facebook </a>
          <a href="/"> Messages </a>
        </div>
        <div>
          <h4>Others </h4>
          <a href="/"> Feedback </a>
          <a href="/"> Terms </a>
          <a href="/"> Privacy </a>
          <a href="/"> More</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
