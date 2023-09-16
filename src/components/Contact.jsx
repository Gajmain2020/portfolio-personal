/* eslint-disable no-alert */
/* eslint-disable quotes */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionWrapper from "../hoc";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import contact from "../assets/contact.svg";
import style from "./styles/contact.module.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [apicalled, setApiCalled] = useState(false);

  // useEffect(() => {
  //   emailjs.init("j94p-D9Jfgx6UWGZF");
  // }, []);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    setApiCalled(true);
    emailjs.init("j94p-D9Jfgx6UWGZF");
    emailjs
      .send("service_ltcjlj5", "template_80rk7sd", form)
      .then((res) => {
        setApiCalled(false);
        if (res.status !== 200) {
          alert("Message could not be sent... ");

          return;
        }
        alert("Message sent to GAJENDRA SAHU successfully...");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <motion.h1 variants={textVariant()} className={style.title}>
        Get in Touch!
      </motion.h1>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
        I&apos;m always excited to hear about new opportunities and
        collaborations. Don&apos;t hesitate to reach out and let&apos;s make
        something great.
      </motion.p>
      <motion.p variants={fadeIn("", "", 0.15, 1)} className={style.subtitle}>
        Feel free to contact me at my mail{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="mailto:sahu.gajendra.2309@gmail.com"
        >
          sahu.gajendra.2309@gmail.com
        </a>
      </motion.p>
      <div className={style.container}>
        <motion.form
          variants={slideIn("left", "", 0, 1)}
          className={style.form_container}
        >
          <div className={style.form}>
            <h4 className={style.form_title}>Contact Me</h4>
            <input
              type="text"
              placeholder="Name"
              required
              maxLength="30"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={style.input}
            />
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={form.email}
              onChange={handleChange}
              className={style.input}
            />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your message"
              required
              maxLength="500"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={`${style.input} ${style.textarea}`}
            />
            {!apicalled ? (
              <button onClick={handleSubmit} className={style.btn_container}>
                <span className={style.btn_hover}>Get in touch</span>
                <span className={style.btn}>Get In Touch</span>
              </button>
            ) : (
              <button disabled className={style.btn_disabled}>
                <span className={style.btn}>Sending Message</span>
              </button>
            )}
          </div>
        </motion.form>
        <motion.div
          variants={slideIn("right", "", 0, 1)}
          className={style.img_container}
        >
          <img
            src={contact}
            alt="contact"
            className={style.img}
            loading="lazy"
          />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact", "my-0");
