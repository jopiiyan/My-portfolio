import React, { useState } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/toggleButton";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 350,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      variants={variants}
      animate={open ? "open" : "closed"}
    >
      <motion.div variants={variants} className="bg">
        <Links></Links>
      </motion.div>
      <ToggleButton setOpen={setOpen}></ToggleButton>
    </motion.div>
  );
};

export default Sidebar;
