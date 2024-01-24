import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "SwiftVPN Website",
    img: "/portfolio.jpeg",
    desc: "A VPN website which is entirely responsive and has an easy-to-use layout,so it will work and look great on any device.",
    link: "https://swiftvpn.netlify.app",
  },
  {
    id: 2,
    title: "Mini Portfolio Website",
    img: "/mini-portfolio.png",
    desc: "A collection of my past mini projects",
    link: "https://jopiiyan.github.io/Collections-of-mini-Projects/",
  },
];

const Single = ({ item }) => {
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <img src={item.img} alt="" />
          <motion.div className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id}></Single>
      ))}
    </div>
  );
};

export default Portfolio;
