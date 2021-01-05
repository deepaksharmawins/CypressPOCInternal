/// <reference types="Cypress" />
describe('Account Selector', function () {

    it('Should click on account option.', () => {

        //login to the app
        cy.login();
        
        cy.intercept('/api/core/init').as('waitForResponse')
        cy.wait('@waitForResponse')
        cy.wait(10000);
        //click on account drive app suite ddlb
        cy.get('#navPopup')
            .should('exist').should('be.visible')
            .click()
        cy.wait(8000);

        //click on accounts in account drive app suite ddlb
        cy.get('[role="option"]').contains('Account')
            .should('exist').should('be.visible')
            .click()
    });
});
