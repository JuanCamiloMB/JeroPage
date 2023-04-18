import { useState } from "react";
import Menu_img from "../assets/menu.png";
import "./Menu.css";
import Close_img from "../assets/close.png";
import { motion, AnimatePresence } from "framer-motion";

function Menu() {
  const [desplegado, setDesplegado] = useState(false);

  return (
    <>
      <AnimatePresence mode="wait">
        {desplegado && (
          <motion.nav
            className="text-black bg-white"
            id="menu_open"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            exit={{ x: -500 }}
            transition={{
              ease: "easeIn",
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
          <nav
            className="flex align-items justify-items-center"
            id="menu_close"
          >
            <motion.img
              className="absolute cursor-pointer z-10"
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
