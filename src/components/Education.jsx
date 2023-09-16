import { motion } from "framer-motion";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import style from "./styles/about.module.css";
import SectionWrapper from "../hoc";
import { FaLinkedinIn, FaQuoteLeft } from "react-icons/fa";
import { education } from "../constants";

const Education = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      Education
    </motion.h1>
    <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
      What my education looks like -
    </motion.p>
    <div className={style.carousel_container}>
      <motion.div
        variants={fadeIn("", "", 0.5, 1)}
        className={style.card_container}
      >
        {education.map((edu) => (
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn("", "", 0.15, 1)}
            key={edu.id}
            className={style.card_shadow}
          >
            <div className={style.card}>
              <div className={style.header_text}>
                <motion.div variants={textVariant()}>{edu.header}</motion.div>
              </div>
              <p className={style.side_subtitle}>{edu.stream}</p>
              <p className={style.side_subtitle}>{edu.school}</p>
              <p className={style.side_subtitle}>{edu.addr}</p>
              <p className={style.side_subtitle}>{edu.pincode}</p>
              <p className={style.side_subtitle}>{edu.cpi}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(Education, "education", "");
