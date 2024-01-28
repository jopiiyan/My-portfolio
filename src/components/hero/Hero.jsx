import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          variants={textVariants}
          initial="initial"
          animate="animate"
          className="textContainer"
        >
          <motion.h2 className="name" variants={textVariants}>
            Jovyan
          </motion.h2>
          <motion.h1 className="title" variants={textVariants}>
            Front-end Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.a
              href="#Portfolio"
              className="button"
              variants={textVariants}
            >
              See the Latest Work
            </motion.a>
            <motion.a
              href="#Contact"
              className="button"
              variants={textVariants}
            >
              Contact Me
            </motion.a>
          </motion.div>
  
        </motion.div>
      </div>
      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="slidingTextContainer"
      >
        React Tailwind CSS Sass 
      </motion.div>
    </div>
  );
};

export default Hero;
