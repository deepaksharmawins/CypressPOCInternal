Cypress.Commands.add('login', () => {

    cy.fixture('appConfig').then((data) => {

        cy.visit(data.baseUrl);

        // Fill the username
        cy.get('[name="userName"]')
            .type(data.primaryUsername)
            .should('have.value', data.primaryUsername);

        // Fill the password
        cy.get('[name="password"]')
            .type(data.primaryPassword)
            .should('have.value', data.primaryPassword);

        // check Remember me
        cy.get('[role="checkbox"]').click();

        // Locate and submit the form
        cy.get('[role="button"]').click()

        // cy.wait(10000);
    })
})
Cypress.Commands.add('loginFailed', () => {

    cy.fixture('appConfig').then((data) => {

        cy.visit(data.baseUrl);

        // Fill the username
        cy.get('[name="userName"]')
            .type(data.secondaryUsername)
            .should('have.value', data.secondaryUsername);

        // Fill the password
        cy.get('[name="password"]')
            .type(data.secondaryPassword)
            .should('have.value', data.secondaryPassword);

        // check Remember me
        cy.get('[role="checkbox"]').click();

        // Locate and submit the form
        cy.get('[role="button"]').click()

        // cy.wait(10000);
    })
})

















declare namespace Cypress {
    interface Chainable<Subject> {
        login(): Cypress.Chainable<void>;
        loginFailed(): Cypress.Chainable<void>;
    }
}