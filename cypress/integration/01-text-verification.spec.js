describe('go to login page', function() {
    beforeEach(function () {
      cy.visit('https://solara.tiangus.com');
    });

    it('Url should have "login"', function() {
      cy.contains('Inicia sesión').click();

      cy.url().should('include', '/login');
    });

    it('contains Login Button', function () {
        cy.get('#btn_login').should('exist');
    });
  });