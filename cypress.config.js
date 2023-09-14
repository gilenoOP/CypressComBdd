const { defineConfig } = require("cypress");
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: "ibf92q",
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportTitle: 'Projeto do curso de Cypress',
    reportPageTitle: 'Projeto do curso de Cypress',
  },
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
