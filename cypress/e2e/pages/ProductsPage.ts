/// <reference types="cypress-xpath" />

class ProductsPage {
    private pageTitle = () => cy.get('.title')
    private addProductBtn = (product) => cy.xpath(`//*[text()="${product}"]/ancestor::*[contains(@class,"item_label")]/following-sibling::*[@class="pricebar"]//button[contains(@id,"add")]`)
    private shoppingCartIcon = () => cy.get('.shopping_cart_badge')

    checkPageTitle(title) {
        this.pageTitle().should('have.text', title)
        return this
    }

    addProductToCart(productName) {
        this.addProductBtn(productName).click()
        return this
    }

    openCart(){
        this.shoppingCartIcon().click()
    }

}

export default new ProductsPage()
