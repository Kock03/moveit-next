import "@/styles/global.css";
import type { AppProps } from "next/app";
import { ChallengesProvider } from "../contexts/ChallegensContext";
import { useState } from "react";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default App;
