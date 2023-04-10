import { useState } from "react";
import Menu_img from "../assets/menu.svg";
import "./Menu.css";
import Close_img from "../assets/close.svg";
import { motion, AnimatePresence } from "framer-motion";

function Menu() {
  const [desplegado, setDesplegado] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {desplegado && (
          <motion.nav
          id="menu_open"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{x: -500}}
          transition={{
            ease: 'easeIn'
          }}
          >
            <img
              src={Close_img}
              id="close_img"
              onClick={() => setDesplegado(false)}
            />

            <div id="menu_options">
              <a href="#">Primera seccion</a>
              <a href="#">Segunda seccion</a>
              <a href="#">Tercera seccion</a>
              <a href="#">Cuarta seccion</a>
              <a href="#">Quinta seccion</a>
              <a href="#">Sexta seccion</a>
            </div>
          </motion.nav>
        )}
        {!desplegado && (
          <nav id="menu_close">
            <motion.img
              id="menu_img"
              src={Menu_img}
              onClick={() => setDesplegado(true)}
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              exit={{ x: -500 }}
            />
          </nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default Menu;
