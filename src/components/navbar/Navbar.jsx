import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Jovyan
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/jopiiyan?igsh=MTJ3NmJzbGcxbmtvaw%3D%3D&utm_source=qr"
            target="_blank"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a
            href="https://github.com/jopiiyan?tab=repositories"
            target="_blank"
          >
            <FaGithub></FaGithub>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
