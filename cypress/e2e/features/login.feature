Feature: Login
    Eu como usuário
    Desejo fazer login na aplicação
    Para fazer uso como cliente

    Scenario: Validar tela de login
        Given I am on Home page
        When I click login link
        Then the system displays the login screen

    Scenario: Realizar login com campos vazios
        Given I am on login screen
        When I click login
        Then I see the message "E-mail inválido."

    Scenario: Realizar login com campo e-mail vazio
        Given I am on login screen
        And I fill password "123456"
        When I click login
        Then I see the message "E-mail inválido."

    Scenario: Realizar login com e-mail incorreto
        Given I am on login screen
        And I fill my credentials "teste@teste", "123456"
        When I click login
        Then I see the message "E-mail inválido."

    Scenario: Realizar login com campo senha vazio
        Given I am on login screen
        And I fill e-mail "teste@teste.com"
        When I click login
        Then I see the message "Senha inválida."

    Scenario: Realizar login com campo senha com menos de 6 caracteres
        Given I am on login screen
        And I fill my credentials "teste@teste.com", "12345"
        When I click login
        Then I see the message "Senha inválida."

    Scenario: Realizar login com sucesso
        Given I am on login screen
        And I fill my credentials "teste@teste.com", "123456"
        When I click login
        Then system performs login

#CENÁRIO DESATIVADO, POIS A APLICAÇÃO NÃO ESTÁ IMPLEMENTADA
    #Scenario: Realizar login automaticamente mantendo o browser aberto
        #Given I am logged in with the Remember me checkbox checked
        #When I log out successfully
        #Then login details will be filled automatically

#CENÁRIO DESATIVADO, POIS A APLICAÇÃO NÃO ESTÁ IMPLEMENTADA
    #Scenario: Realizar login automaticamente ao reabrir o browser
        #Given I logged out with the Remember me check box selected
        #And I close the browser
        #When I access the application again
        #Then the application is accessed with the logged in account

    Scenario: Realizar logout
        Given I am logged
        When I click logout
        Then system logs off successfully