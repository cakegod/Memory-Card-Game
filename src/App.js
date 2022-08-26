import React, {useState} from 'react';
import Header from './components/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer';
import {cardList} from './assets/cardList'

function App() {
  let bestScore = 0;
  const [score, setScore] = useState(0);
  const [cards, setCards] = useState(cardList);

  const shuffleCards = (cardCopy) => {
    for (let i = 0; i < cardCopy.length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      [cardCopy[i], cardCopy[j]] = [cardCopy[j], cardCopy[i]];
    }
    setCards(cardCopy);
  };

  const toggleClicked = (passedCard, cardsCopy) => {
    setCards(
      cardsCopy.map((card) => {
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

  const resetGame = (cardsCopy) => {
    setCards(
      cardsCopy.map((card) => {
        return {
          ...card,
          clicked: false,
        };
      }),
    );
    setScore(0);
  };

  const handleClick = (card) => {
    const cardsCopy = [...cards];
    shuffleCards(cardsCopy);
    card.clicked ? resetGame(cardsCopy) : toggleClicked(card, cardsCopy);
  };

  if (score > bestScore) {
    bestScore = score;
  }

  return (
    <>
			<Header score={score} bestScore={bestScore}/>
			<Content click={handleClick} cards={cards}/>
			<Footer/>
		</>
  );
}

export default App;
