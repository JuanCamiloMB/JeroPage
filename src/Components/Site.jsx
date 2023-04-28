import CuartaSeccion from "../Sections/CuartaSeccion";
import PrimeraSeccion from "../Sections/PrimeraSeccion";
import QuintaSeccion from "../Sections/QuintaSeccion";
import SegundaSeccion from "../Sections/SegundaSeccion";
import SextaSeccion from "../Sections/SextaSeccion";
import TerceraSeccion from "../Sections/TerceraSeccion";
import Inicio from "./Inicio";
import Menu from "./Menu";
import "./Site.css";
import { motion } from "framer-motion";

function Site() {
  return (
    <>
      <Menu />
      <motion.div
        className="bg-white text-black flex flex-col gap-60"
        id="theContent"
        transition={{
          duration: 1,
        }}
      >
        <Inicio />
        <PrimeraSeccion />
        <SegundaSeccion />
        <TerceraSeccion />
        <CuartaSeccion />
        <QuintaSeccion />
        <SextaSeccion />
      </motion.div>
    </>
  );
}

export default Site;
