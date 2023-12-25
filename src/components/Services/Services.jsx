import React, { useRef } from "react";
import "./services.scss";
import { easeInOut, motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTailwindcss,
  SiFramer,
  SiFramework7,
  SiFramework,
} from "react-icons/si";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      duration: 1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      variants={variants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
      className="services"
    >
      <motion.div variants={variants} className="textContainer">
        <p>
          I am a dedicated <br /> and ambitious programmer{" "}
        </p>
        <hr />
      </motion.div>
      <motion.div variants={variants} className="titleContainer">
        <div className="title">
          <img src="/website.svg" alt="" />
          <h1 className="firstTitle">
            <motion.b whileHover={{ color: "orange", cursor: "pointer" }}>
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1 className="secondTitle">
            <motion.b
              whileHover={{
                color: "orange",
                cursor: "pointer",
              }}
            >
              For Every
            </motion.b>{" "}
            Websites.
          </h1>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <h1>
          <motion.b whileHover={{ color: "orange", cursor: "pointer" }}>
            Skills
          </motion.b>{" "}
          That I Possess{" "}
        </h1>
        <div className="iconsContainer">
          <motion.div whileHover={{ color: "#e34c26" }}>
            <FaHtml5 className="icons" size={60} />
          </motion.div>

          <motion.div whileHover={{ color: "#2962ff" }}>
            {" "}
            <FaCss3Alt className="icons" size={60}></FaCss3Alt>
          </motion.div>

          <motion.div whileHover={{ color: "#f0db4f" }}>
            {" "}
            <IoLogoJavascript className="icons" size={60}></IoLogoJavascript>
          </motion.div>

          <motion.div whileHover={{ color: "#1c84bc" }}>
            {" "}
            <FaReact className="icons" size={60}></FaReact>
          </motion.div>

          <motion.div whileHover={{ color: "#0f9ee1" }}>
            {" "}
            <SiTailwindcss className="icons" size={60}></SiTailwindcss>
          </motion.div>

          <motion.div whileHover={{ color: "#cc6699" }}>
            {" "}
            <FaSass className="icons" size={60}></FaSass>
          </motion.div>

          <motion.div whileHover={{ color: "#000000" }}>
            {" "}
            <SiFramer className="icons" size={60}></SiFramer>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
