import React, { useState } from "react";
import { motion } from "framer-motion";

// ================================
import { Box, Button, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

// ===============================

const TopComponent = () => {

  // =======================
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // =======================

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

        {/* ========================== */}
        
          <motion.button
            onClick={handleOpen}
            className="item"
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
            <img
              src="https://toplogos.ru/images/thumbs/preview-logo-mts.png"
              alt="Логотип MTS"
            />
          </motion.button>
        
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        {/* ================================= */}
      </div>
    </>
  );
};

export default TopComponent;
