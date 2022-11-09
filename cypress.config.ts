import {defineConfig} from 'cypress'
import {tagify} from 'cypress-tags';

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com/',
        defaultCommandTimeout: 10000,
        setupNodeEvents(on, config) {
            on('file:preprocessor', tagify(config));
        }

    },
    chromeWebSecurity: false,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
        configFile: 'reporter-config.json'
    }

});
