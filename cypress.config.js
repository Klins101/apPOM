const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "http://automationpractice.com/index.php",
    "defaultCommandTimeout": 600000,
    "execTimeout": 100000,
    "viewportWidth": 1366,
    "viewportHeight": 800,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
