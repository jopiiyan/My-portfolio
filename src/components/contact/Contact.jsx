import React, { useRef, useState } from "react";
import "./contact.scss";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_86z0mt5",
        "template_pclt6x3",
        formRef.current,
        "JU39CldMSTF8lMFfu"
      )
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isInView && "animate"}
      className="contact"
    >
      <motion.div variants={variants} className="textContainer">
        <h1>Contact me!</h1>
        <div className="infoWrapper">
          <div className="item">
            <h2>Mail</h2>
            <span>jovyanqiu@gmail.com</span>
          </div>
          <div className="item">
            <h2>Address</h2>
            <span>Tanjungpinang, Indonesia</span>
          </div>
          <div className="item">
            <h2>Phone</h2>
            <span>083801267255</span>
          </div>
        </div>
      </motion.div>
      <motion.div variants={variants} className="formContainer">
        <form onSubmit={sendEmail} ref={formRef} action="">
          <div className="div">
            {" "}
            <input type="text" required placeholder="Name" name="name" />
            <input type="text" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Messages" name="message" />
            <button>Submit</button>
            {error && "Error"}
            {success && "Success"}
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
