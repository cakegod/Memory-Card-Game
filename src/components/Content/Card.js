import React, { memo } from 'react';
import { useCardsStore, useScoreStore } from '../../store';
import { motion } from 'framer-motion';

function Card({ card }) {
	const increaseScore = useScoreStore((state) => state.increaseScore);
	const resetScore = useScoreStore((state) => state.resetScore);

	const shuffleCards = useCardsStore((state) => state.shuffleCards);
	const cardToggle = useCardsStore((state) => state.cardToggle);
	const cardsReset = useCardsStore((state) => state.cardsReset);

	const handleClick = (card) => {
		shuffleCards();
		card.clicked ? resetGame() : toggleClicked(card);
	};

	const toggleClicked = (passedCard) => {
		cardToggle(passedCard);
		increaseScore();
	};

	const resetGame = () => {
		cardsReset();
		resetScore();
	};

	return (
		<motion.div
			drag
			dragSnapToOrigin={true}
			dragTransition={{ bounceStiffness: 400, bounceDamping: 5 }}
			className='card'
			onClick={() => handleClick(card)}>
			<img
				src={card.img}
				alt={card.name}
				onDragStart={(e) => e.preventDefault()}></img>
			<p>{card.name}</p>
		</motion.div>
	);
}
export default memo(Card);
