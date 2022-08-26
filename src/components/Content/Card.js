import React from 'react';

export default function Card({click, card}) {
  return (
    <div className='card' onClick={() => click(card)}>
			<img src={card.img} alt=''></img>
			<p>{card.name}</p>
		</div>
  );
}
