/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /**
     * Shortcut for get data-testid (cy.get([data-testid='xxx']))
     * @param id
     * @example cy.getByTestId("email")
     */
    getByTestId(id: string): Chainable<(cy & EventEmitter) | JQuery<HTMLElement>>
  }
}
