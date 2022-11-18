/// <reference types='cypress-tags' />
import loginPage from "../pages/LoginPage";
import productsPage from "../pages/ProductsPage";
import cartPage from "../pages/CartPage";
import checkoutPage from "../pages/CheckoutPage";

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
        cy.fixture('errors').then((errors) => {
            this.errors = errors
        })

    })

    it('Check product presence in cart', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .addProductToCart(this.products.items.backpack)
            .openCart()
        cartPage.checkProductPresents(this.products.items.backpack)
    })

    it('Remove product from the cart', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .addProductToCart(this.products.items.backpack)
            .openCart()
        cartPage.checkProductPresents(this.products.items.backpack)
            .removeItem(this.products.items.backpack)
            .checkItemNotPresent(this.products.items.backpack)
    })

    it('Checkout with one item in the cart', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .addProductToCart(this.products.items.backpack)
            .openCart()
        cartPage.checkProductPresents(this.products.items.backpack)
            .clickCheckoutBtn()
        checkoutPage.enterFirstname(this.user.firstName)
            .enterLastname(this.user.lastname)
            .enterPostalCode(this.user.postalCode)
            .clickContinueBtn()
            .clickFinishBtn()
            .checkCompleteHeader(this.products.checkout.completeHeader)
            .clickBackHomeBtn()
        productsPage.checkPageTitle(this.products.pageTitle)
    })

    it(['smoke'], 'Checkout with several items', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .addProductToCart(this.products.items.backpack)
            .addProductToCart(this.products.items.jacket)
            .addProductToCart(this.products.items.tshirt)
            .openCart()
        cartPage.checkProductPresents(this.products.items.backpack)
            .checkProductPresents(this.products.items.jacket)
            .checkProductPresents(this.products.items.tshirt)
            .clickCheckoutBtn()
        checkoutPage.enterFirstname(this.user.firstName)
            .enterLastname(this.user.lastname)
            .enterPostalCode(this.user.postalCode)
            .clickContinueBtn()
            .clickFinishBtn()
            .checkCompleteHeader(this.products.checkout.completeHeader)
            .clickBackHomeBtn()
        productsPage.checkPageTitle(this.products.pageTitle)
    })

    it('Checkout with one item removal', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .addProductToCart(this.products.items.backpack)
            .addProductToCart(this.products.items.jacket)
            .addProductToCart(this.products.items.tshirt)
            .openCart()
        cartPage.checkProductPresents(this.products.items.backpack)
            .checkProductPresents(this.products.items.jacket)
            .checkProductPresents(this.products.items.tshirt)
            .removeItem(this.products.items.tshirt)
            .checkItemNotPresent(this.products.items.tshirt)
            .clickCheckoutBtn()
        checkoutPage.enterFirstname(this.user.firstName)
            .enterLastname(this.user.lastname)
            .enterPostalCode(this.user.postalCode)
            .clickContinueBtn()
            .clickFinishBtn()
            .checkCompleteHeader(this.products.checkout.completeHeader)
            .clickBackHomeBtn()
        productsPage.checkPageTitle(this.products.pageTitle)
    })

    it('Checkout without first name', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .addProductToCart(this.products.items.backpack)
            .openCart()
        cartPage.checkProductPresents(this.products.items.backpack)
            .clickCheckoutBtn()
        checkoutPage.enterLastname(this.user.lastname)
            .enterPostalCode(this.user.postalCode)
            .clickContinueBtn()
            .checkErrorMsg(this.errors.checkout.firstNameErr)
    })

    it('Sort products from A to Z', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .selectSortOption(this.products.sortOptions.aToZ)
            .itemsShouldBeSortedAtoZ()
    })

    it('Sort products from Z to A', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .selectSortOption(this.products.sortOptions.zToA)
            .itemsShouldBeSortedZtoA()
    })

    it('Sort products by price from low to high', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .selectSortOption(this.products.sortOptions.priceLowToHight)
            .itemsShouldBeSortedByLowPrice()
    })

    it('Sort products by price from high to low', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .selectSortOption(this.products.sortOptions.priceHighToLow)
            .itemsShouldBeSortedBeHighPrice()
    })

    it('Add product to the cart and continue shopping', function () {
        productsPage.checkPageTitle(this.products.pageTitle)
            .addProductToCart(this.products.items.backpack)
            .openCart()
        cartPage.clickContinueShoppingBtn()
        productsPage.checkPageTitle(this.products.pageTitle)
    })


})
