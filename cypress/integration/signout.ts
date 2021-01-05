/// <reference types="Cypress" />
describe('Signout', function () {

    it('Should click settings icon and then signout.', () => {
        //login to the app
        cy.login();
        
        cy.intercept('/api/core/init').as('waitForResponse')
        cy.wait('@waitForResponse')
        cy.wait(10000);
        //click on settings icon to show settings pop up
        cy.get('#settingsPopup')
            .should('exist').should('be.visible')
            .click()
        cy.wait(2000);

        //click on logout button
        cy.get('.d-con-settings-user-profile-log-out')
            .should('exist').should('be.visible')
            .click()

        //click on Yes to confirm logout
        cy.get('.dx-toolbar-center').contains('Yes')
            .should('exist').should('be.visible')
            .click()

    });

});  