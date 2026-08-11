Cypress.Commands.add('cadastrarUsuario', (usuario) => {
  cy.visit('/register.html')

  cy.get('#name').type(usuario.nome)
  cy.get('#email').type(usuario.email)
  cy.get('#phone').type(usuario.telefone)
  cy.get('#password').type(usuario.senha)
  cy.get('#confirm-password').type(usuario.senha)

  cy.get('input[type="checkbox"]').check({ force: true })

  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('loginUsuario', (email, senha) => {
  cy.visit('/login.html')

  cy.get('#email').type(email)
  cy.get('#password').type(senha)

  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('logoutUsuario', () => {
  cy.get('button[title="Sair"]').click()
})