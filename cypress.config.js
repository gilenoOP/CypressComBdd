const { defineConfig } = require("cypress");
const createBundler = require ("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require ("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require ("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  projectId: "ibf92q",
  e2e: {
    baseUrl: "https://automationpratice.com.br/",
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
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