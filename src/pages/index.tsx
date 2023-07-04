import { Profile } from "@/components/Profile";
import ExperienceBar from "../components/ExperienceBar";
import styles from "../styles/pages/Home.module.css";
import { CompleteChallenges } from "@/components/CompleteChallenges";
import { Countdown } from "@/components/Countdown";

import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
      </section>
    </div>
  )
}
