import { Alert, AlertColor, Snackbar } from "@mui/material";
import React from "react";

type SnackProp = {
  isOpen: boolean;
  onClose: () => void;
  children: string;
  severity: AlertColor;
};

const Snack = ({ isOpen, onClose, children, severity }: SnackProp) => {
  return (
    <Snackbar open={isOpen} autoHideDuration={1500} onClose={onClose}>
      <Alert severity={severity}>{children}</Alert>
    </Snackbar>
  );
};

export default Snack;
