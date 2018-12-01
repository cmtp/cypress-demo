describe('go to login page', function() {
    beforeEach(function () {
      cy.visit('https://solara.tiangus.com');

      cy.contains('Inicia sesión').click();
    });

    it('contains Login Button', function () {
        cy.get('#login_user')
            .type('auto-test@mailnesia.com');
        
        cy.get('#login_pws')
            .type('Kadmin1234');

        cy.get('#btn_login')
            .click();

        cy.get('h3').should('contain', 'Ventas');
    });
  });