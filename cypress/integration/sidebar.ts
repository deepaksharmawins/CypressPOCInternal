/// <reference types="Cypress" />
describe('Sidebar', function () {

    it('Should click icons on sidebar hamburger menu twice.', () => {
        
        //login to the app
        cy.login();
        // cy.wait(5000);


        cy.intercept('/api/core/init').as('waitForResponse')
        cy.wait('@waitForResponse')
        cy.wait(10000);

        //click on sidebar hamburger menu
        cy.get('.sidebar-collapse')
            .should('exist').should('be.visible').click()
        cy.wait(5000);

        //click again on sidebar hamburger menu
        cy.get('.sidebar-collapse')
            .should('exist').should('be.visible').click()
        cy.wait(1000);

    });
});  