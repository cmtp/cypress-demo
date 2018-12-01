describe('Debugger sample', function() {
    it('Exist feature button', function () {
        cy.visit('https://solara.tiangus.com/info');
      
        
        cy.get('#navbar-sign > ul > li.nav-item:nth-child(2) > a')
            .debug();

        cy.get('#navbar-sign > ul > li.nav-item:nth-child(2) > a')
            .should('contain', 'Especificaciones');
    });
  });