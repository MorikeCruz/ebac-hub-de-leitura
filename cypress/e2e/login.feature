Feature: Login no Hub de Leitura

  Scenario: Login realizado com sucesso
    Given que estou na página de login
    When informo um email e senha válidos
    And clico no botão entrar
    Then devo ser direcionado para o dashboard

  Scenario: Login com credenciais inválidas
    Given que estou na página de login
    When informo um email e senha inválidos
    And clico no botão entrar
    Then devo visualizar uma mensagem de erro