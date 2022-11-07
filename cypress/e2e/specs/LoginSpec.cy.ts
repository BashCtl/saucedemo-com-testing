import loginPage from "../pages/LoginPage";
import productsPage from "../pages/ProductsPage";

describe('Testing user login', () => {

    beforeEach(function () {
        cy.fixture('user').then((user) => {
            this.user = user
        })
        cy.fixture('products').then((products) => {
            this.products = products
        })

        cy.fixture('errors').then((errors) => {
            this.errors = errors
        })
        loginPage.navigate()
    })

    it('Valid standard user login', function () {
        loginPage.enterUsername(this.user.standard.username)
            .enterPassword(this.user.password)
            .clickLoginBtn()
        productsPage.checkPageTitle(this.products.pageTitle)
    })

    it('Login with invalid user password', function () {
        loginPage.enterUsername(this.user.standard.username)
            .enterPassword(this.user.invalidPass)
            .clickLoginBtn()
            .checkLoginError(this.errors.login.invalidCredentials)
    })

})
