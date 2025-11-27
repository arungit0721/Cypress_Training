const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "9wjah3",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // You can return config if you've modified it
    },
  },
});
