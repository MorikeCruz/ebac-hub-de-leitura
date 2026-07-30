import { faker } from '@faker-js/faker'

describe('Fluxo End-to-End - Cadastro e Login', () => {

  it('Deve cadastrar um novo usuário e realizar o login', () => {

    const nome = faker.person.fullName()
    const email = faker.internet.email().toLowerCase()
    const telefone = '11999999999'
    const senha = 'Teste@123'

    // Cadastro
    cy.visit('/register.html')

    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type(telefone)
    cy.get('#password').type(senha)
    cy.get('#confirm-password').type(senha)

    // Aceita os termos
    cy.get('input[type="checkbox"]').check({ force: true })

    // Cria a conta
    cy.get('button[type="submit"]').click()

    // Aguarda entrar no dashboard
    cy.url({ timeout: 10000 }).should('include', 'dashboard')

    // Logout
    cy.get('button[title="Sair"]').click()

    // Deve voltar para o login
    cy.url({ timeout: 10000 }).should('include', 'login')

    // Login novamente
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('button[type="submit"]').click()

    // Validação final
    cy.url({ timeout: 10000 }).should('include', 'dashboard')

  })

})