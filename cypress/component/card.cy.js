import Card from '../../src/components/Content/Card';
import { cardList } from '../../src/assets/cardList';

describe('Card', () => {
	const cards = cardList.splice(3);
	it('renders the correct image and text', () => {
		cards.forEach((card) => {
			cy.mount(<Card card={card} />);
			cy.get('p').should('be.visible').and('have.text', card.name);
			cy.get('img').should('be.visible').and('have.attr', 'src', card.img);
		});
	});
});
