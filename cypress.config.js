const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

      // Base URL for your app (can be your local dev server URL)
      baseUrl: "http://localhost:8080",  // Replace with your app's URL

      // Glob pattern to match test spec files
     // specPattern: "cypress/e2e/*.cy.js",  // Adjust to match your test files
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
