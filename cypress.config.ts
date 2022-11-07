import {defineConfig} from 'cypress'

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com/',

    },
    chromeWebSecurity: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json'
    }

});
