import React, { useState } from "react";
import { motion } from "framer-motion";

const TopComponent = () => {
  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.4,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.2,
            },
          },
        }}
      >
        <h1 className="title">Web-terminal</h1>
      </motion.div>
      <div className="operators-card">
        <motion.li
          className="item"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.4,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
          whileHover={{
            position: "relative",
            zIndex: 1,
            background: "white",
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a href="">
            <img
              src="https://toplogos.ru/images/thumbs/preview-logo-mts.png"
              alt="Логотип MTS"
            />
          </a>
        </motion.li>
        <motion.li
          className="item"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.5,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
          whileHover={{
            position: "relative",
            zIndex: 1,
            background: "white",
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a href="">
            <img
              src="https://toplogos.ru/images/thumbs/preview-logo-megafon.png"
              alt="Логотип Megafon"
            />
          </a>
        </motion.li>
        <motion.li
          className="item"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.4,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            },
          }}
          whileHover={{
            position: "relative",
            zIndex: 1,
            background: "white",
            scale: 1.2,
            transition: {
              duration: 0.2,
            },
          }}
        >
          <a href="">
            <img
              src="https://toplogos.ru/images/thumbs/preview-logo-beeline.png"
              alt="Логотип Beeline"
            />
          </a>
        </motion.li>
      </div>
    </>
  );
};

export default TopComponent;
