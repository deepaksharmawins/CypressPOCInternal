/// <reference types="Cypress" />
describe('Login to App', function () {
    it('Should login to driveshop.', () => {
        cy.loginFailed();

        cy.intercept('/api/core/init').as('waitForResponse')
        cy.wait('@waitForResponse')

        cy.wait(5000)
        cy.login();
    })
});  