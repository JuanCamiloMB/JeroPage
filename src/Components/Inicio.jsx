import Logo from "../assets/LogoJero_white.svg";
import "./Inicio.css";

function Inicio() {
  return (
    <div id="inicio">
      <div className="" id="name">Jeronimo Uribe Aranzazu</div>
      <div className="" id="description">Psicólogo</div>
      <img src={Logo} id="logo" />
    </div>
  );
}

export default Inicio;
