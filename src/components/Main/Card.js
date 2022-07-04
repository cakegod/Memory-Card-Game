import React from 'react';

export default function Card({ name, click, card }) {
	return (
		<div className='card' onClick={(event) => click(card) }>
			<div></div>
			<p>{name}</p>
		</div>
	);
}
