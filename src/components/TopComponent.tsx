import React from "react";
import { motion } from "framer-motion";
import { operators } from "@/constants/operators";
import Link from "next/link";

export const TopComponent = () => {
  return (
    <>
      <h1 className="title">Web-terminal</h1>

      <div className="operators-card">
        {operators.map((res) => {
          return (
            <Link legacyBehavior href={`/payment/${res.name}`} key={res.name}>
              <motion.button
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
                <img src={res.img} alt={res.name} />
              </motion.button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default TopComponent;
