/// <reference types="Cypress" />
describe('Change Password', function () {

    it('Should click icons on header.', () => {

         //login to the app
         cy.login();

        cy.intercept('/api/core/init').as('waitForResponse')
        cy.wait('@waitForResponse')
        cy.wait(10000);

        cy.fixture('appConfig').then((data) => {
            //click on settings icon to show settings pop up
            cy.get('#settingsPopup')
                .should('exist').should('be.visible')
                .click()
            cy.wait(2000);


            //click on change password icon
            cy.contains("Change Password")
                .should('exist').should('be.visible')
                .click()
            cy.wait(2000);


            // fill old password
            cy.get('[name="oldPassword"]')
                .type(data.newPassword)
                .should('have.value', data.newPassword);

            // fill new password
            cy.get('[name="newPassword"]')
                .type(data.newPassword)
                .should('have.value', data.newPassword);

            //confirm password
            cy.get('[name="confirmPassword"]')
                .type(data.newPassword)
                .should('have.value', data.newPassword);

            // Locate and submit the form
            cy.get('[aria-label="Change"]').click().wait(10000)

            // cancel
            //cy.get('[aria-label="Cancel"]').click()


            //confirmation popup
            // cancel
            // cy.get('[aria-label="Save"]').click()


            // don't save
            //cy.get('[aria-label="Dont Save"]').click()


            // cancel confirm
            //cy.get('[aria-label="Cancel"]').click()

        });
    });

}); 
