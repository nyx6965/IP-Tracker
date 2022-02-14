import Head from "next/head";
import React from "react";

import Header from "./Header.js";

// const MapsNoSSR = dynamic(() => import("./MapsNoSSR.js"), { ssr: false });
// import dynamic from "next/dynamic";

export default function Home() {
  return (
    <React.StrictMode>
      <Head>
        <title>IP Address Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
        />
      </Head>
      <Header />
      {/* <div id="map">
        <MapsNoSSR />
      </div> */}
    </React.StrictMode>
  );
}
