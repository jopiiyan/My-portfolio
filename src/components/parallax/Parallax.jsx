import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaMoon } from "react-icons/fa6";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #42007E, #05185B), "
            : "linear-gradient(180deg,  #505064, #42007E )",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "My Skills?" : "My Projects?"}
      </motion.h1>
      <motion.div className="contents"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
        }}
      >
        <FaMoon size={90}></FaMoon>
      </motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
