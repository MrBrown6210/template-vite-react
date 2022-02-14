/// <reference types="cypress" />

describe('register to app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.url().should('include', '/login')
    cy.getByTestId('signup').click()
    cy.url().should('include', '/signup')
  })

  it('register with credential should navigate to homepage', () => {
    cy.getByTestId('email').type('superadmin@gmail.com')
    cy.getByTestId('password').type('123456789')
    cy.getByTestId('confirm-password').type('123456789')
    cy.getByTestId('name').type('admin')
    cy.getByTestId('last-name').type('admin')
    cy.getByTestId('organization').type('Best Organization in my life')
    cy.getByTestId('country').type('Thailand')
    cy.getByTestId('phone').type('Thailand')
    cy.getByTestId('is_agree_collect_data').check()
    cy.getByTestId('need_notify_review_update').check()
    cy.getByTestId('need_contact_to_review').check()
    cy.getByTestId('form').submit()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('register with empty form should stay in register page', () => {
    cy.getByTestId('form').submit()
    cy.url().should('include', '/signup')
  })
})
