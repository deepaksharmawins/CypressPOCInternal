/// <reference types="Cypress" />
describe('Location Selector', function () {

    it('Should click icons on header.', () => {

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

        //click on MSO in account drive app suite ddlb
        cy.get('[role="option"]').contains('MSO')
            .should('exist').should('be.visible')
            .click()
        cy.wait(1000);

        //click on the select button
        cy.get('[role="button"]').contains('Select')
            .should('exist').should('be.visible')
            .click()
        cy.wait(3000);

    });


});
