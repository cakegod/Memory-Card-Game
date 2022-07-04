import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import uniqid from 'uniqid';

function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [shuffle, setShuffle] = useState(false);
	const [cards, setCards] = useState([
		{ name: 'one', id: uniqid(), isClicked: false, img: '' },
		{ name: 'two', id: uniqid(), isClicked: false, img: '' },
		{ name: 'three', id: uniqid(), isClicked: false, img: '' },
		{ name: 'four', id: uniqid(), isClicked: false, img: '' },
		{ name: 'five', id: uniqid(), isClicked: false, img: '' },
		{ name: 'six', id: uniqid(), isClicked: false, img: '' },
		{ name: 'seven', id: uniqid(), isClicked: false, img: '' },
		{ name: 'eight', id: uniqid(), isClicked: false, img: '' },
	]);

	const isCardClicked = (card) => {
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
			setCards(
				cards.map((item) => {
					return {
						...item,
						isClicked: false,
					};
				}),
			);
		}
	};

	useEffect(() => {
		if (shuffle === true) {
			const randomize = [...cards];
			for (let i = randomize.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[randomize[i], randomize[j]] = [randomize[j], randomize[i]];
			}
			setCards(randomize);
			setShuffle(false);
		}
	}, [cards, shuffle]);

	const handleClick = (card) => {
		isCardClicked(card);
		setShuffle(true);
	};

	useEffect(() => {
		if (score > bestScore) {
			setBestScore(score);
		}
	}, [bestScore, score]);

	return (
		<>
			<Header score={score} bestScore={bestScore} />
			<Main click={handleClick} cards={cards} />
			<Footer />
		</>
	);
}

export default App;
