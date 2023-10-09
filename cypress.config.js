const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  videoCompression: false,
  videoUploadOnPasses: true,
  viewportHeight: 1080,
  viewportWidth: 1500,

  e2e: {
    // baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',

    setupNodeEvents(on, config) {
      screenshotOnRunFailure = true;

      require('cypress-mochawesome-reporter/plugin')(on);

    },
    // "video": true,
    // "env": {
    //   "cypress-log": "false",
    //   "cypress-video-recorder": {
    //     "capture": "viewport"
    //   }
    // }
  },
});

