import React from 'react';
import Card from './Main/Card';

export default function Main({ click, cards }) {
	return (
		<main className='main'>
      {cards.map(card => {
        return (<Card name={card.name} key={card.id} card={card} click={click}/>)
      })}
		</main>
	);
}
