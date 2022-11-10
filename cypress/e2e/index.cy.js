/// <reference types="cypress" />

describe("Navigation", () => {
  it("Home Page Test", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "about" and click it
    cy.get('[alt="me"]').should("have.attr", "src").should("include", "me");
    cy.get("h1").contains("Marco Pollacci");
  });
});
