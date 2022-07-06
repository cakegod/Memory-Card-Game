import React, { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import uniqid from 'uniqid';

function App() {
	const shuffle = useRef(false);
	const [score, setScore] = useState(0);

	const [bestScore, setBestScore] = useState(0);
	const [cards, setCards] = useState([
		{
			name: 'Rawst',
			id: uniqid(),
			isClicked: false,
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/rawst-berry.png',
		},
		{
			name: 'Mago',
			id: uniqid(),
			isClicked: false,
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mago-berry.png',
		},
		{
			name: 'Sitrus',
			id: uniqid(),
			isClicked: false,
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sitrus-berry.png',
		},
		{
			name: 'Cheri',
			id: uniqid(),
			isClicked: false,
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png',
		},
		{
			name: 'Aspear',
			id: uniqid(),
			isClicked: false,
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/aspear-berry.png',
		},
		{
			name: 'Persim',
			id: uniqid(),
			isClicked: false,
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/persim-berry.png',
		},
		{
			name: 'Lum',
			id: uniqid(),
			isClicked: false,
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/lum-berry.png',
		},
		{
			name: 'Iapapa',
			id: uniqid(),
			isClicked: false,
			img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/iapapa-berry.png',
		},
	]);

	const isCardClicked = (clickedCard) => {
		if (clickedCard.isClicked === false) {
			setCards(
				cards.map((card) => {
					if (card.id === clickedCard.id) {
						return {
							...clickedCard,
							isClicked: true,
						};
					} else return card;
				}),
				setScore(score + 1),
			);
		} else {
			setCards(
				cards.map((card) => {
					return {
						...card,
						isClicked: false,
					};
				}),
				setScore(0),
			);
		}
	};

	useEffect(() => {
		if (shuffle.current === true) {
			const randomize = [...cards];
			for (let i = randomize.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[randomize[i], randomize[j]] = [randomize[j], randomize[i]];
			}
			setCards(randomize);
			shuffle.current = false;
		}
	}, [cards]);

	const handleClick = (card) => {
		isCardClicked(card);
		shuffle.current = true;
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
