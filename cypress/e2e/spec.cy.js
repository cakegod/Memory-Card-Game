import { cardList } from '../../src/assets/cardList';
import { shuffleCards } from '../../src/store';

describe('memory game', () => {
	beforeEach(() => cy.visit('/'));

	it('display the start button', () => {
		cy.findByRole('button')
			.should('be.visible')
			.and('contains', /press to start/i);
	});

	it('displays the score and best score correctly', () => {
		// Presses play game button
		cy.findByRole('button').click();

		// Presses every card once and checks score & best score
		cardList.forEach((card, index) => {
			cy.get('.score-container').first().should('contain', index);
			cy.get('.score-container').last().should('contain', index);
			cy.findByRole('img', { name: card.name }).click();
		});

		// Presses one card after and check score & best score
		cy.findByRole('img', { name: /rawst/i }).click();
		cy.get('.score-container').first().should('contain', 0);
		cy.get('.score-container').last().should('contain', 8);
	});

	it('displays the cards in a random order when a user clicks one', () => {
		cy.findByRole('button').click();
		cy.findAllByRole('img').then((cards) => {
			const originalOrder = cards.map((card) => card.textContent);
			cy.findAllByRole('img').first().click();
			cy.findAllByRole('img').then((newCards) => {
				const newOrder = newCards.map((card) => card.textContent);
				expect(newOrder).to.not.deep.equal(originalOrder);
			});
		});
	});
});
