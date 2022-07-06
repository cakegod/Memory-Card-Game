import React, { useState } from 'react';
import Card from './Main/Card';

function Main({ click, cards }) {
	const [gameIsReady, setGameIsReady] = useState(false);
	const gameReady = () => setGameIsReady(true);
	const gameRender = () => {
		if (gameIsReady) {
			return cards.map((card) => {
				return <Card key={card.id} card={card} click={click} alt='' />;
			});
		} else {
			return <button onClick={gameReady}>Press to start!</button>;
		}
	};


	return (
		<main className='main'>
			{gameRender()}
		</main>
	);
	
}

export default Main;
