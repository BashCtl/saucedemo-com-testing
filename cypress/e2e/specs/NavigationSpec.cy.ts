import loginPage from "../pages/LoginPage";
import sauceLabsPage from "../pages/SauceLabsPage";
import productsPage from "../pages/ProductsPage";

describe('Navigation test', () => {
    beforeEach(function () {
        cy.fixture('user').then((user) => {
            this.user = user
            loginPage.navigate()
                .enterUsername(this.user.standard.username)
                .enterPassword(this.user.password)
                .clickLoginBtn()
        })
    })

    it('Navigate to about page', () => {
        productsPage.openBurgerMenu()
            .clickAboutMenuLink()
        sauceLabsPage.sauceLabsLogoShouldBeVisible()
    })


})
