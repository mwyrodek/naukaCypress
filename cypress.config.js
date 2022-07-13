const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  retries: {
    openMode: 0,
    runMode: 1
  },
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      sauceUrl: 'https://www.saucedemo.com/',
    },
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": "results/test-results.xml",
    "testCaseSwitchClassnameAndName": false
  }
})
