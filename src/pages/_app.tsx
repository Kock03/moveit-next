import "@/styles/global.css";
import type { AppProps } from "next/app";
import { ChallengesProvider } from "../contexts/ChallegensContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  );
}

export default App;
