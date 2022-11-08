import loginPage from "../pages/LoginPage";
import productsPage from "../pages/ProductsPage";
import cartPage from "../pages/CartPage";

describe('Verify product test scenarios', () => {

    beforeEach(function () {
        cy.fixture('user').then((user) => {
            this.user = user
            loginPage.navigate()
                .enterUsername(this.user.standard.username)
                .enterPassword(this.user.password)
                .clickLoginBtn()
        })
        cy.fixture('products').then((products) => {
            this.products = products
        })

    })

    it('Check product presence in cart', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .addProductToCart(this.products.items.backpack)
            .openCart()
        cartPage.checkProductPresents(this.products.items.backpack)
    })


})
