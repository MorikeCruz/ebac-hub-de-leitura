const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const mochawesome = require("cypress-mochawesome-reporter/plugin");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  mochawesome(on);

  on(
    "file:preprocessor",
    createBundler({
      define: {},
      plugins: [
        require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin(config)
      ]
    })
  );

  return config;
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",

  reporterOptions: {
    reportDir: "docs",
    charts: true,
    reportPageTitle: "Relatório Cypress",
    embeddedScreenshots: true,
    inlineAssets: true
  },

  e2e: {
    baseUrl: "http://localhost:3000",

    specPattern: [
      "cypress/e2e/**/*.feature",
      "cypress/e2e/**/*.cy.js"
    ],

    setupNodeEvents
  }
});