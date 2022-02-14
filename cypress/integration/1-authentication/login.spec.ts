/// <reference types="cypress" />

describe('login to app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('login with email & password should navigate to homepage', () => {
    cy.url().should('include', '/login')
    cy.getByTestId('email').type('superadmin@gmail.com')
    cy.getByTestId('password').type('123456789')
    cy.getByTestId('form').submit()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('login with invalid email & password should stay in login page', () => {
    cy.url().should('include', '/login')
    cy.getByTestId('email').type('wrong@gmail.com')
    cy.getByTestId('password').type('123456789')
    cy.getByTestId('form').submit()
    cy.url().should('include', '/login')
  })
})
