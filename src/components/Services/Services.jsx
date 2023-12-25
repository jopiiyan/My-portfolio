import React, { useRef } from "react";
import "./services.scss";
import { easeInOut, motion } from "framer-motion";
import { useInView } from "framer-motion";

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
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange", cursor: "pointer" }}>
              Unique
            </motion.b>{" "}
            Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
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
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div variants={variants} className="listContainer">
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste
            assumenda totam qui possimus, velit et laudantium amet quo beatae
            libero aspernatur deleniti, ducimus quaerat earum in maiores. Eius,
            suscipit!
          </p>
          <button>Go!</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste
            assumenda totam qui possimus, velit et laudantium amet quo beatae
            libero aspernatur deleniti, ducimus quaerat earum in maiores. Eius,
            suscipit!
          </p>
          <button>Go!</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste
            assumenda totam qui possimus, velit et laudantium amet quo beatae
            libero aspernatur deleniti, ducimus quaerat earum in maiores. Eius,
            suscipit!
          </p>
          <button>Go!</button>
        </div>
        <div className="box">
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iste
            assumenda totam qui possimus, velit et laudantium amet quo beatae
            libero aspernatur deleniti, ducimus quaerat earum in maiores. Eius,
            suscipit!
          </p>
          <button>Go!</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
