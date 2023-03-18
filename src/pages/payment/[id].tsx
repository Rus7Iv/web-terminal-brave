import React, { useState } from "react";
import { Operator } from "../../types";
import Snack from "../../components/Snack";
import OperatorForm from "../../components/OperatorForm";
import { AlertColor } from "@mui/material";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";

type OperatorProps = {
  operator: Operator;
};

type TRouterState = {
  phoneValue: string;
  inputValue: number;
  phoneInputDirty: boolean;
  snackOpen: boolean;
  snackSeverity: AlertColor;
  snackAlertText: string;
};

const Payment = ({ operator }: OperatorProps) => {
  const { query } = useRouter();
  const [state, setState] = useState<TRouterState>({
    phoneValue: "",
    inputValue: 1,
    phoneInputDirty: false,
    snackOpen: false,
    snackSeverity: "error",
    snackAlertText: "",
  });

  const handleSubmit = () => {
    if (state.phoneValue.length === 11) {
      return new Promise((resolve, reject) => {
        setState((state) => ({
          ...state,
          snackOpen: true,
          snackSeverity: "success",
          snackAlertText: "The operation was completed successfully!",
        }));
        setTimeout(() => {
          if (Math.random() < 0.5) {
            resolve([
              window.history.pushState({}, "", `/`),
              window.location.reload(),
            ]);
          } else {
            reject();
            setState((state) => ({
              ...state,
              snackOpen: true,
              snackSeverity: "error",
              snackAlertText: "ERROR! Something's wrong...",
            }));
          }
        });
      });
    } else {
      setState((state) => ({ ...state, phoneInputDirty: true }));
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "phone") {
      setState((state) => ({ ...state, phoneInputDirty: true }));
    }
  };

  const handleSumInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberReg = /(?![0]).*^[0-9]*[.,]?[0-9]+$/g;
    const inputValueNumber = Number(value);

    if (numberReg.test(value) && inputValueNumber <= 1000) {
      setState((state) => ({ ...state, inputValue: inputValueNumber }));
    }
  };

  return (
    <div className="payment">
      <h1>{query.id}</h1>
      <div className="operator-payment">
        <OperatorForm
          phoneValue={state.phoneValue}
          inputValue={state.inputValue}
          phoneInputDirty={state.phoneInputDirty}
          onChange={(phone: string) => {
            setState((state) => ({ ...state, phoneValue: phone }));
          }}
          onSumInputChange={handleSumInputChange}
          onBlurHandler={blurHandler}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Pay
        </Button>
        <div className="go_back">
          <Link legacyBehavior href={"/"}>
            Go back
          </Link>
        </div>
      </div>
      <Snack
        isOpen={state.snackOpen}
        onClose={() => {
          setState((state) => ({ ...state, snackOpen: false }));
        }}
        severity={state.snackSeverity}
      >
        {state.snackAlertText}
      </Snack>
    </div>
  );
};

export default Payment;
