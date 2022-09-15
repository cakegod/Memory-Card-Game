import React, { useState } from 'react';
import { useScoreStore } from '../store';

export default function Header() {
  const score = useScoreStore((state) => state.score);
  const [bestScore, setBestScore] = useState(0);
  const computeBestScore = () => {
    if (score > bestScore) {
      setBestScore(score);
    }
    return bestScore;
  };

  return (
    <header className="header">
      <h1>Memory Card Game</h1>
      <div className="score-container">
        <h2>Score: {score}</h2>
        <h2>Best Score: {computeBestScore()}</h2>
      </div>
    </header>
  );
}
