/// <reference types="cypress" />

describe("Home Page Test", () => {
  beforeEach(() => {
    // Start from the index page
    cy.visit("http://localhost:3000/");
  });
  it("Check if image show", () => {
    cy.get('[alt="me"]').should("have.attr", "src").should("include", "me");
  });
  it("Check if my name show", () => {
    cy.get("h1").contains("Marco Pollacci");
  });
  it("Check number of social link", () => {
    cy.get("ul li a").should("have.length", 5);
  });
});
