import React, { useState } from "react";
import Snack from "../../components/Snack";
import OperatorForm from "../../components/Payment/OperatorForm";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import { OperatorPayment } from "@/components/Payment/Payment.styled";
import { Main, Title } from "@/components/styles";
import Head from "next/head";
import GlobalStyle from "@/globalStyles";

enum AlertSeverity {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

const Payment = () => {
  const { query } = useRouter();
  const router = useRouter();
  const [state, setState] = useState({
    phoneValue: "",
    phoneInputDirty: false,
    snackOpen: false,
    snackSeverity: AlertSeverity.ERROR,
    snackAlertText: "",
  });

  function ServerAnswer() {
    return new Promise((resolve, reject) => {
      setState((state) => ({
        ...state,
        snackOpen: true,
        snackSeverity: AlertSeverity.SUCCESS,
        snackAlertText: "The operation was successfully performed!",
      }));
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve([router.push("/")]);
        } else {
          reject();
          setState((state) => ({
            ...state,
            snackOpen: true,
            snackSeverity: AlertSeverity.ERROR,
            snackAlertText: "ERROR! Something's wrong...",
          }));
        }
      });
    });
  }

  const handleSubmit = () => {
    if (state.phoneValue.length === 11) {
      ServerAnswer();
    } else {
      setState((state) => ({ ...state, phoneInputDirty: true }));
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "phone") {
      setState((state) => ({ ...state, phoneInputDirty: true }));
    }
    if (e.target.name == "currency") {
      setState((state) => ({ ...state, currencyInputDirty: true }));
    }
  };
  return (
    <>
      <Head>
        <title>Payment</title>
        <link rel="icon" href="/money.png" />
      </Head>
      <GlobalStyle />
      <Main>
        <Title>{query.id}</Title>
        <OperatorPayment>
          <OperatorForm
            phoneValue={state.phoneValue}
            phoneInputDirty={state.phoneInputDirty}
            onChange={(phone: string) => {
              setState((state) => ({ ...state, phoneValue: phone }));
            }}
            onBlurHandler={blurHandler}
          />
          <Button variant="contained" onClick={handleSubmit} className="pay">
            Pay
          </Button>
          <div className="go_back">
            <Link legacyBehavior href={"/"}>
              Go back
            </Link>
          </div>
        </OperatorPayment>
        <Snack
          isOpen={state.snackOpen}
          onClose={() => {
            setState((state) => ({ ...state, snackOpen: false }));
          }}
          severity={state.snackSeverity}
        >
          {state.snackAlertText}
        </Snack>
      </Main>
    </>
  );
};

export default Payment;
