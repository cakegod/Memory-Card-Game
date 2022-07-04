import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import uniqid from 'uniqid';

function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState([
		{ name: 'one', id: uniqid(), isClicked: false },
		{ name: 'two', id: uniqid(), isClicked: false },
		{ name: 'three', id: uniqid(), isClicked: false },
		{ name: 'four', id: uniqid(), isClicked: false },
		{ name: 'five', id: uniqid(), isClicked: false },
		{ name: 'six', id: uniqid(), isClicked: false },
		{ name: 'seven', id: uniqid(), isClicked: false },
		{ name: 'eight', id: uniqid(), isClicked: false },
	]);

	const shuffleCards = () => {
		const randomize = [...cards];
		for (let i = randomize.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[randomize[i], randomize[j]] = [randomize[j], randomize[i]];
		}
		setCards(randomize);
	};

	useEffect(() => {
		shuffleCards();
	}, [cards]);

	const handleClick = (card) => {
		if (card.isClicked === false) {
			setCards(
				cards.map((item) => {
					if (item.id === card.id) {
						return {
							...card,
							isClicked: true,
						};
					} else return item;
				}),
				setScore(score + 1),
		
			);
		} else {
			setScore(0);
		}
	};


	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<Main click={handleClick} cards={cards} />
			<Footer />
		</>
	);
}

export default App;
