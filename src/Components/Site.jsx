import { useRef } from "react";
import Inicio from "./Inicio";
import Menu from "./Menu";
import "./Site.css";
import { motion } from "framer-motion";

function Site() {
  return (
    <>
      <Menu />
      <motion.div
        id="theContent"
        transition={{
          duration: 1,
        }}
      >
        <Inicio />
      </motion.div>
    </>
  );
}

export default Site;
