import logo from "../../assets/imgs/logo.png";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div>
        <img className="header__img" src={logo} alt="logo" />
        <h1 className="header__titulo">
          Personas y Equipos
          <p className="header__parrafo">organizados en un solo lugar.</p>
        </h1>
      </div>
    </header>
  );
}

export default Header;
