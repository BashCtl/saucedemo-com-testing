/// <reference types="cypress-xpath" />

class ProductsPage {
    private pageTitle = () => cy.get('.title')
    private addProductBtn = (product) => cy.xpath(`//*[text()="${product}"]/ancestor::*[contains(@class,"item_label")]/following-sibling::*[@class="pricebar"]//button[contains(@id,"add")]`)
    private shoppingCartIcon = () => cy.get('.shopping_cart_badge')
    private sortDropdown = () => cy.get('.product_sort_container')
    private itemNames = () => cy.get('.inventory_item_name')

    checkPageTitle(title) {
        this.pageTitle().should('have.text', title)
        return this
    }

    addProductToCart(productName) {
        this.addProductBtn(productName).click()
        return this
    }

    openCart() {
        this.shoppingCartIcon().click()
    }

    selectSortOption(option) {
        this.sortDropdown().select(option)
        return this
    }

    itemsShouldBeSortedAtoZ() {
        this.itemNames().then((items) => {
            const itemsTitles = Array.from(items, item => item.innerText)
            // @ts-ignore
            expect(itemsTitles).to.be.sorted()
        })
        return this
    }

}

export default new ProductsPage()
