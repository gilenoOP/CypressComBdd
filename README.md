# Teste de Software com Cypress e Metodologia BDD no automationpratice.com.br

Este projeto de teste de software utiliza o framework Cypress para automatizar testes de login e cadastro de usuário no site [automationpratice.com.br](http://automationpratice.com.br). O objetivo é demonstrar a integração de várias ferramentas e práticas, incluindo Cucumber, relatórios Mochawesome, CI/CD no GitHub, agendamento de job na pipeline e envio de notificação de resultados para o Slack.

## Pré-requisitos

- **Sistema Operacional**: Windows
- **Ferramentas de Teste**: Cypress
- **Metodologia BDD**: Cucumber
- **Relatórios**: Mochawesome
- **Integração Contínua/Entrega Contínua**: GitHub Actions (CI/CD)
- **Agendamento de Job**: GitHub Actions
- **Notificação**: Slack

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/gilenoOP/CypressComBdd.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

- Configure as credenciais do Slack para receber notificações de testes bem-sucedidos ou com falha.

## Estrutura do Projeto

- `cypress/` - Contém os testes Cypress.
- `cypress/e2e/features/` - Os cenários de teste Cucumber estão localizados aqui.
- `cypress/support/` - Page Objects e configurações do Cypress.
- `cypress.config.js` - Plugins Cypress.
- `.github/workflows/` - Arquivos de configuração da pipeline no GitHub Actions.

## Executando Testes

Para executar os testes localmente, utilize o seguinte comando:

```bash
npm run test
```

## CI/CD no GitHub

A integração contínua e a entrega contínua estão configuradas no GitHub Actions. Os testes serão automaticamente executados em cada push para o repositório.

## Agendamento de Job

Os testes também podem ser agendados para execução em horários específicos usando as configurações do GitHub Actions.

## Notificação no Slack

Os resultados dos testes serão automaticamente notificados no Slack após cada execução bem-sucedida ou com falha.

## Relatórios

Os relatórios de testes são gerados utilizando o Mochawesome e podem ser encontrados em [cypress/reports/html](cypress/reports/html).

## Apoio na instalação/configuração de plugins

Caso necessário, acesse:
https://github.com/LironEr/cypress-mochawesome-reporter#readme para ter um suporte na instalação e configuração do cypress-mochawesome-reporter
https://github.com/badeball/cypress-cucumber-preprocessor#readme para ter um suporte na instalação e configuração do cypress-cucumber-preprocessor