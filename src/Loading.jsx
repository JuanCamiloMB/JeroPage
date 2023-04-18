import { AnimatePresence, easeIn, motion } from "framer-motion";
import { useState, useEffect } from "react";
import Logo from "/LogoJeroVacio.svg";
import Site from "./Components/Site";
import "./Loading.css";

function Loading() {
  const [loadProgress, setLoadProgress] = useState(0);
  const [showSite, setShowSite] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowSite(true);
          }, 1000);
        }
        return prevProgress + 1;
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSite && (
          <motion.div
            key={"1"}
            id="site"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
            }}
          >
            <Site />
          </motion.div>
        )}

        {!showSite && (
          <motion.div
            key={"2"}
            id="container"
            className="flex items-center justify-center h-screen w-screen bg-black"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
            }}
          >
            <div id="LoadContainer">
              <img id="load_logo" src={Logo} alt="Logo" />
              <svg id="load" width="100%" height="100%" className="">
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height={loadProgress + "%"}
                  fill="#FFFFFF"
                />
                <rect
                  x="0"
                  y={loadProgress + "%"}
                  width="100%"
                  height={100 - loadProgress + "%"}
                  fill="#FFFFFF"
                  fillOpacity="0.1"
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Loading;
