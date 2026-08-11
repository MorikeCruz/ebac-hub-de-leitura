import { faker } from '@faker-js/faker'

describe('Fluxo End-to-End - Cadastro e Login', () => {

  it('Deve cadastrar um novo usuário e realizar o login', () => {

    const nome = faker.person.fullName()
    const email = faker.internet.email().toLowerCase()
    const telefone = '11999999999'
    const senha = 'Teste@123'

    const usuario = {
      nome,
      email,
      telefone,
      senha
    }

    // Cadastro
    cy.cadastrarUsuario(usuario)

    // Aguarda entrar no dashboard
    cy.url({ timeout: 10000 }).should('include', 'dashboard')

    // Logout
    cy.logoutUsuario()

    // Deve voltar para o login
    cy.url({ timeout: 10000 }).should('include', 'login')

    // Login novamente
    cy.loginUsuario(email, senha)

    // Validação final
    cy.url({ timeout: 10000 }).should('include', 'dashboard')
  })

})