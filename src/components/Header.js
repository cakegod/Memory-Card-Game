import React from 'react';

export default function Header({score, bestScore}) {
  return (
    <header className='header'>
			<h1>Memory Card Game</h1>
			<div className='score-container'>
				<h2>Score: {score}</h2>
				<h2>Best Score: {bestScore}</h2>
			</div>
		</header>
  );
}
