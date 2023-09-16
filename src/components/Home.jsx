/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable quotes */
import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { motion } from "framer-motion";
// eslint-disable-next-line import/no-extraneous-dependencies
import Typewriter from "typewriter-effect";
import style from "./styles/home.module.css";
import { fadeIn, staggerContainer } from "../utils/motion";

const strings = [
  "I am a Full-Stack-Developer",
  "I am a Leetcoder",
  "I am a Competetive Programmer",
  "I am a Coding Enthusiast",
];

const Home = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
  >
    <div className={style.container}>
      <p className={style.intro}>
        Hi There, I&apos;m{" "}
        <motion.span variants={fadeIn("", "", 0.1, 1)} className={style.name}>
          Gajendra Sahu
        </motion.span>
      </p>
      <p className={style.intro}>
        But you can call me{" "}
        <motion.span variants={fadeIn("", "", 0.3, 1)} className={style.name}>
          Gajju
        </motion.span>
      </p>
      <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.desc}>
        <Typewriter
          options={{
            strings,
            autoStart: true,
            loop: true,
          }}
        />
      </motion.p>
      <motion.button
        variants={fadeIn("", "", 0.6, 1)}
        className={style.btn_container}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: "smooth",
          });
        }}
      >
        <span className={style.btn_hover}>Check out my work</span>
        <span className={style.btn}>Check out my work</span>
        <MdOutlineArrowForwardIos className={style.arrow} />
      </motion.button>
    </div>
  </motion.section>
);

export default Home;
