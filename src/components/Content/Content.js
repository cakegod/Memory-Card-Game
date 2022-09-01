import React, { useState } from 'react';
import Card from './Card';

function Content({ click, cards }) {
	const [gameIsReady, setGameIsReady] = useState(false);
	const gameRender = () => {
		if (gameIsReady) {
			return cards.map((card) => {
				return <Card key={card.id} card={card} click={click} alt='' />;
			});
		} else {
			return (
				<button onClick={() => setGameIsReady(true)}>Press to start!</button>
			);
		}
	};

	return <main className='main'>{gameRender()}</main>;
}

export default Content;
