// A zustand test!

import create from 'zustand';
import { cardList } from './assets/cardList';

export const useScoreStore = create((set) => ({
  score: 0,
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
  resetScore: () => set((state) => ({ score: (state.score = 0) })),
}));

export const useCardsStore = create((set) => ({
  cards: cardList,
  shuffleCards: () =>
    set((state) => ({
      cards: shuffleCards(state.cards),
    })),
  cardToggle: (passedCard) =>
    set((state) => ({
      cards: state.cards.map((card) => {
        if (card.id === passedCard.id) {
          return {
            ...card,
            clicked: true,
          };
        } else return card;
      }),
    })),
  cardsReset: () =>
    set((state) => ({
      cards: state.cards.map((card) => {
        return {
          ...card,
          clicked: false,
        };
      }),
    })),
}));

const shuffleCards = (cards) => {
  const cardsCopy = [...cards];
  for (let i = 0; i < cardsCopy.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
  }
  return cardsCopy;
};
