describe('CSS-Tricks home page', function () {
    beforeEach(function () {
        cy.visit('https://css-tricks.com');
      });
      
    describe('With a 1085 viewport', function () {
        beforeEach(function() {
            cy.viewport(1085, 660);
        });

        // cy.viewport(320, 568);

        it('has a visible mobile menu toggle', function () {
            cy.get('#mobile-menu-toggle').should('be.visible');
        });
    });
});