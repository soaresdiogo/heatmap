describe('To go Start Page', () => {
  it('Should return true when title of form was correct', () => {
    cy.visit('/');

    cy.contains('House form').should('to.have.length', 1);
  });

  it('Should save a new register', () => {
    cy.visit('/');

    cy.get('[data-cy=zipCode]').type('92000000');
    cy.get('[data-cy=number]').type(3);
    cy.get('[data-cy=latitude]').type(-29.4526879);
    cy.get('[data-cy=longitude]').type(-51.5847623);
    cy.get('[data-cy=residentNumber]').type(3);

    cy.get('[data-cy=save]').click();

    cy.get('[data-cy=zipCode]').should('have.value', '');
  });
});
