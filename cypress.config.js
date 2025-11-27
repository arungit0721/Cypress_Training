const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "mdt7jm",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // You can return config if you've modified it
    },
  },
});
