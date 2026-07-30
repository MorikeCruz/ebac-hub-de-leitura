Cypress.Commands.add('login', (email, senha) => {
    cy.visit('/login.html')

    cy.get('#email').type(email)
    cy.get('#password').type(senha)

    cy.contains('Entrar').click()
})