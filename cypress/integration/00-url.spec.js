describe('angular home page', function() {
    beforeEach(function () {
      cy.visit('https://solara.tiangus.com/info');
    });

    it('contains "Solara" in the title', function() {
      cy.title().should('contain', 'Solara');
    });
  });