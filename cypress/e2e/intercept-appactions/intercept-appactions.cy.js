import { realizarLogin } from '../../support/appActions';

describe('Intercept e AppActions - Hub de Leitura', () => {

  it('Cenário positivo - login realizado com sucesso usando Intercept', () => {

    cy.intercept('POST', '**/api/login').as('login');

    cy.visit('/login.html');

    realizarLogin('usuario@teste.com', 'user123');

    cy.wait('@login').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
    });
  });


  it('Cenário negativo - login inválido usando Intercept', () => {

    cy.intercept('POST', '**/api/login').as('login');

    cy.visit('/login.html');

    realizarLogin('usuario@teste.com', 'senhaerrada');

    cy.wait('@login').then((interception) => {
      expect(interception.response.statusCode).to.be.oneOf([400, 401]);
    });
  });


  it('Cenário com AppActions - realizar login', () => {

    cy.visit('/login.html');

    realizarLogin('usuario@teste.com', 'user123');

    cy.url().should('include', 'dashboard.html');
  });

});