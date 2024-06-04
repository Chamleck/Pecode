const { defineConfig } = require('cypress')
const Mochawesome = require("mochawesome");

let myUniqueId

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
    video: true,
  //videoUploadOnPasses: false,
    reporter: "mochawesome",
    reporterOptions: {
    reportDir: "cypress/reports/mochawesome",
    overwrite: true,
    html: true,
    json: true,
  },
  
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    
  e2e: {
    setupNodeEvents(on, config) {
  //added task which can save values
      on('task', {
        setMyUniqueId: (val) => {
            return (myUniqueId = val);
        },
//extract values
        getMyUniqueId: () => {
            return myUniqueId;
        },

   // Task to generate the Mochawesome report
         async generateMochawesomeReport() {
         const files = await Mochawesome.list("cypress/reports/mochawesome");
         await Mochawesome.merge(files).then(Mochawesome.report);
         }
    });


      // modify config values

      config.defaultCommandTimeout = 10000
      config.pageLoadTimeout = 100000
      config.baseUrl = 'https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php'
      
      // modify env var value
      config.env.ENVIRONMENT = 'main'

      // IMPORTANT return the updated config object
      return config
    }
  }
})