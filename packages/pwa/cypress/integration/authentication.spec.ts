/// <reference types="cypress" />

describe('The Authentication works', () => {
  describe('Authentication Firebase works', () => {
    it('successfully logs in the user', () => {
      cy.login()
    })

    after(() => {
      cy.logout()
    })
  })

  describe('Authentication UI works', () => {
    it('successfully opens the authentication modal', () => {
      cy.logout()
      cy.visit('/')

      // @ts-ignore
      cy.getByTestId('nav-login-link').last().click({ force: true })
      cy.url().should('include', '/authentication?previous=/')
      cy.get('[role="dialog"]').should('have.length', 1) // Modal should exists and only one
    })

    it('successfully logs in a new user using google provider', () => {
      cy.logout()
      cy.visit('/')

      // @ts-ignore
      cy.loginUI({ providerId: 'google.com' })
    })

    it('successfully logs in a new user using facebook provider', () => {
      cy.logout()
      cy.visit('/')

      // @ts-ignore
      cy.loginUI({ providerId: 'facebook.com' })
    })

    it('successfully logs in a new user and redirecting to correct previous page', () => {
      cy.logout()
      const homePageUrl = '/home'
      cy.visit(homePageUrl)

      // @ts-ignore
      cy.loginUI({ providerId: 'google.com', previousUrl: homePageUrl })
    })
  })
})
