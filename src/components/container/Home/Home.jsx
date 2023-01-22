import React from "react";
import portfolio from "../../../assets/logo.jpeg";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1,
      },
    },
  };

  return (
    <motion.div
      className="container "
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}>
      <div className="profile">
        <img src={portfolio} alt="portfolio" />
      </div>
      <div className="profile_text">
        <h3 className="name">
          Hi, I'm <span>WaveD</span>{" "}
        </h3>
        <span className="job">Web Developer </span>
        <span className="text">
          Maxim
          <br /> no pain, no gain
        </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation">
          connect with me
        </motion.a>
        <div className="web">Web Developer</div>
        <div className="freelance">Content Creator</div>
      </div>
    </motion.div>
  );
};

export default Home;
