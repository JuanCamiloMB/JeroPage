import gmail from "../assets/gmail.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";

function SextaSeccion() {
  return (
    <div id="sexta_seccion" className="flex flex-col items-center gap-9">
      <div className="text-6xl">Contacto</div>
      <div id="contact_info" className="flex flex-row w-9/12 justify-between">
        <a href="mailto:psicojua@gmail.com" className="w-1/5">
          <img className="aspect-square w-full" src={gmail} />
        </a>
        <a href="https://www.instagram.com/psicojero/" target="_blank" className="w-1/5">
          <img className="aspect-square w-full" src={instagram} />
        </a>
        <a href="https://www.linkedin.com/in/jeronimouribearanzazu/" target="_blank" className="w-1/5">
          <img className="aspect-square w-full" src={linkedin} />
        </a>
      </div>
    </div>
  );
}

export default SextaSeccion;
