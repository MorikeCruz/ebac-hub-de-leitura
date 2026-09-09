import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("que estou na página de login", () => {
  cy.clearLocalStorage();
  cy.visit("/login.html");
});

When("informo um email e senha válidos", () => {
  cy.get("#email").type("usuario@teste.com");
  cy.get("#password").type("user123");
});

When("informo um email e senha inválidos", () => {
  cy.get("#email").type("usuario@teste.com");
  cy.get("#password").type("senhaerrada");
});

When("clico no botão entrar", () => {
  cy.get("#login-btn").click();
});

Then("devo ser direcionado para o dashboard", () => {
  cy.url().should("include", "/dashboard.html");
});

Then("devo visualizar uma mensagem de erro", () => {
  cy.get("#alert-container")
    .should("be.visible")
    .and("have.class", "alert-danger");
});