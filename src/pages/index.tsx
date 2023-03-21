import React from "react";
import Head from "next/head";
import TopComponent from "@/components/TopComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web-terminal</title>
        <link rel="icon" href="/wallet.png" /> 
      </Head>
      <main className="main">
        <TopComponent />
      </main>
    </>
  );
}
