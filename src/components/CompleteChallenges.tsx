import { useContext } from 'react';
import styles from '../styles/components/CompleteChallenges.module.css'
import { ChallengesContext } from '@/contexts/ChallegensContext';

export function CompleteChallenges() {
  const {challengesCompleted} = useContext(ChallengesContext)


  return (
    <div className={styles.completeChallengesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}