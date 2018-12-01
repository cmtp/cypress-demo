describe('CSS-Tricks home page', function () {
    beforeEach(function () {
        cy.visit('https://css-tricks.com');
      });
      
    describe('site search', function () {
        beforeEach(function() {
            cy.get('.search-field').type('flexbox{enter}');
        });

        // cy.viewport(320, 568);

        it('displays search result', function () {
            cy.get('.search-grid-list li').should('exist');
        });
    });
});