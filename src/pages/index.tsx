import React from "react";
import Head from "next/head";
import { Inter } from "@next/font/google";
import TopComponent from "@/components/TopComponent";


const inter = Inter({ subsets: ["latin"] });
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
