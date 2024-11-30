import "./style.css";
import logo from "../../assets/imgs/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__img" src={logo} alt="Logo" />
      <p className="footer__parrafo">Desarrollado por Sebastian</p>
    </footer>
  );
}

export default Footer;
