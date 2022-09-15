import React, { useState } from 'react';
import { useCardsStore } from '../../store';
import Card from './Card';

function Content() {
	const [gameIsReady, setGameIsReady] = useState(false);
	const cards = useCardsStore((state) => state.cards);
	const gameRender = () => {
		if (gameIsReady) {
			return cards.map((card) => {
				return <Card key={card.id} card={card} alt='' />;
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
