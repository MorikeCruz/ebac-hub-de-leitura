export function realizarLogin(email, senha) {
  cy.get('#email').clear().type(email);
  cy.get('#password').clear().type(senha);
  cy.get('#login-btn').click();
}