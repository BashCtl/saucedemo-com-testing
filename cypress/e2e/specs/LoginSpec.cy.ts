/// <reference types='cypress-tags' />
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

    it(['smoke'], 'Valid standard user login', function () {
        loginPage.enterUsername(this.user.standard.username)
            .enterPassword(this.user.password)
            .clickLoginBtn()
        productsPage.checkPageTitle(this.products.pageTitle)
    })

    it(['smoke'], 'Login with invalid user password', function () {
        loginPage.enterUsername(this.user.standard.username)
            .enterPassword(this.user.invalidPass)
            .clickLoginBtn()
            .checkLoginError(this.errors.login.invalidCredentials)
    })

    it(['smoke'], 'Successfully logout', function () {
        loginPage.enterUsername(this.user.standard.username)
            .enterPassword(this.user.password)
            .clickLoginBtn()
        productsPage.checkPageTitle(this.products.pageTitle)
            .openBurgerMenu()
            .closeBurgerMenu()
            .burgerMenuShouldBeClosed()
            .openBurgerMenu()
            .clickLogoutMenuLink()
        loginPage.loginBtnShouldBeVisible()
    })

    it(['smoke'], 'Attempt to login with locked user', function () {
        loginPage.enterUsername(this.user.locked_out.username)
            .enterPassword(this.user.password)
            .clickLoginBtn()
            .checkLoginError(this.errors.login.lockedUser)
    })

})
