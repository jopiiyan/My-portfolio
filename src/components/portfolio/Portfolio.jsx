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
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <img ref={ref} src={item.img} alt="" />
          <motion.div style={{ y: y }} className="textContainer">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href="https://swiftvpn.netlify.app" target="_blank">
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
