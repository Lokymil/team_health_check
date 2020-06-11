/// <reference types="cypress" />

describe("Accessibility tests", () => {
  it("Has no detectable accessibility violations on homepage", () => {
    cy.visit("/").get("#root").injectAxe();
    cy.checkA11y();
  });

  it("Has no detectable accessibility violations on interview page", () => {
    cy.visit("/interview/tryit").get("#root").injectAxe();
    cy.checkA11y();
  });

  it("Has no detectable accessibility violations on upload page", () => {
    cy.visit("/visualize/upload").get("#root").injectAxe();
    cy.checkA11y();
  });
});
