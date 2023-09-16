import { motion } from "framer-motion";
import SectionWrapper from "../hoc";
import style from "./styles/about.module.css";
import { textVariant, fadeIn } from "../utils/motion";

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn("", "", 0.5, 1)} className={style.text}>
        My name is{" "}
        <a
          href="https://www.linkedin.com/in/gajendra-sahu-b24a51227/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          Gajendra Sahu(Gajju)
        </a>{" "}
        and I am a passionate software engineer specializing in delivering
        state-of-the-art software solutions in ReactJS and NodeJS. I love
        Coding, Movies, and all kinds of Music.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.75, 1)} className={style.text}>
        My journey into the world of coding began with a spark of curiosity that
        has grown into a relentless flame of passion. I thrive on challenges and
        view each line of code as an opportunity to create something
        exceptional. Throughout my career, I've honed my skills, learning new
        languages, frameworks, and methodologies to stay at the forefront of the
        tech landscape.
      </motion.p>
      <motion.p variants={fadeIn("", "", 1, 1.5)} className={style.text}>
        I've always believed that hard work is the key to success. As a
        developer, I'm not afraid to roll up my sleeves and dig deep into
        complex problems. I find satisfaction in conquering challenges, whether
        it's debugging a tricky issue or architecting an elegant solution from
        scratch. My commitment to excellence drives me to continuously improve
        and deliver high-quality code.
      </motion.p>
      <motion.p variants={fadeIn("", "", 1.5, 2)} className={style.text}>
        {" "}
        <b>Coding</b> isn't just a job or learning for me; it's a true labor of
        love. The thrill of crafting software that empowers and enhances lives
        is what keeps me motivated. I find inspiration in the endless
        possibilities that technology offers and the potential to make a
        positive impact on the world.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, "about", "");
