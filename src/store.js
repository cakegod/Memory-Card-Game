// A zustand test!

import create from "zustand";
import { cardList } from "./assets/cardList";

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
      cards: cardToggle(passedCard, state.cards),
    })),
  cardsReset: () =>
    set((state) => ({
      cards: cardsReset(state.cards),
    })),
}));

const shuffleCards = ([...cards]) => {
  for (let i = 0; i < cards.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
};

const cardToggle = (passedCard, cards) => {
  return cards.map((card) => {
    if (card.id === passedCard.id) {
      return {
        ...card,
        clicked: true,
      };
    } else return card;
  });
};

const cardsReset = (cards) => {
  return cards.map((card) => {
    return {
      ...card,
      clicked: false,
    };
  });
};
