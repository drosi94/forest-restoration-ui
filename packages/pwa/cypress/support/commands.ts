// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('getByTestId', (selector, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args)
})

Cypress.Commands.add('loginUI', ({ providerId, previousUrl = '/' }, ...args) => {
  // @ts-ignore
  cy.getByTestId('nav-login-link').last().click({ force: true })
  cy.get(`[data-provider-id="${providerId}"]`).click()
  cy.get('#add-account-button').click()
  cy.get('#autogen-button').click()
  cy.get('#sign-in').click()
  cy.url().should('contains', Cypress.config().baseUrl + (previousUrl === '/' ? '' : previousUrl))
})
