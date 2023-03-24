import React from "react";
import Head from "next/head";
import OperatorsCards from "@/components/OperatorsCards/OperatorsCards";
import { Main, Title } from "@/components/styles";
import GlobalStyle from "../globalStyles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web-terminal</title>
        <link rel="icon" href="/wallet.png" />
      </Head>
      <GlobalStyle />
      <Main>
        <Title>Web-terminal</Title>
        <OperatorsCards />
      </Main>
    </>
  );
}
