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

        //click on location in account drive app suite ddlb
        cy.get('[role="option"]').contains('Location')
            .should('exist').should('be.visible')
            .click()
        cy.wait(3000);


        // cy.contains('_locationDropDownId')
        // .should('exist')
        // .should('visible')
        // .click()

        //click on location in account drive app suite ddlb
        // cy.get('[role="combobox"]',)
        //     .should('exist')
        //     .click({multiple: true} )
       // cy.wait(3000);
        

        //click on the select button
        // cy.get('[role="button"]').contains('Select')
        //     .should('exist').should('be.visible')
        //     .click()
        // cy.wait(3000);

    });
});
