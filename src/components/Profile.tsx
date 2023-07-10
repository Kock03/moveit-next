import { useContext } from "react";
import styles from "../styles/components/Profile.module.css"
import { ChallengesContext } from "@/contexts/ChallegensContext";

export function Profile() {
  const { level } = useContext(ChallengesContext)
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Kock03.png" alt="Vinicius Kock" />
      <div>
        <strong>Vinicius Kock</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level {level}
        </p>
      </div>
    </div>
  );
}