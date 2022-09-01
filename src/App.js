import React, { useState } from 'react';
import Header from './components/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer';
import { cardList } from './assets/cardList';

function App() {
	const [score, setScore] = useState(0);
	const [cards, setCards] = useState(cardList);

	const shuffleCards = () => {
		const cardsCopy = [...cards];
		for (let i = 0; i < cardsCopy.length; i++) {
			let j = Math.floor(Math.random() * (i + 1));
			[cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
		}
		setCards(cardsCopy);
	};

	const toggleClicked = (passedCard) => {
		setCards((c) =>
			c.map((card) => {
				if (card.id === passedCard.id) {
					return {
						...card,
						clicked: true,
					};
				} else return card;
			}),
		);
		setScore(score + 1);
	};

	const resetGame = () => {
		setCards((c) =>
			c.map((card) => {
				return {
					...card,
					clicked: false,
				};
			}),
		);
		setScore(0);
	};

	const handleClick = (card) => {
		shuffleCards();
		card.clicked ? resetGame() : toggleClicked(card);
	};

	let bestScore = 0;

	// Compute the bestscore on render
	if (score > bestScore) {
		bestScore = score;
	}

	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<Content click={handleClick} cards={cards} />
			<Footer />
		</>
	);
}

export default App;
