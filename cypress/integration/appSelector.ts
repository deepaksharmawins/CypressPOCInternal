/// <reference types="Cypress" />
describe('App Selector.', function () {

    it('Should click app selector.', () => {

        //login to the app
        cy.login();

        cy.intercept('/api/core/init').as('waitForResponse')
        cy.wait('@waitForResponse')
        cy.wait(10000);
        //click on app pop up button to show all apps
        cy.get('#appPopup')
            .should('exist').should('be.visible')
            .click()
        cy.wait(2000);

    });

});  