/// <reference types="cypress-xpath" />

class ProductsPage {
    private pageTitle = () => cy.get('.title')
    private addProductBtn = (product) => cy.xpath(`//*[text()="${product}"]/ancestor::*[contains(@class,"item_label")]/following-sibling::*[@class="pricebar"]//button[contains(@id,"add")]`)
    private shoppingCartIcon = () => cy.get('.shopping_cart_badge')
    private sortDropdown = () => cy.get('.product_sort_container')
    private itemsNames = () => cy.get('.inventory_item_name')
    private itemsPrices = () => cy.get('.inventory_item_price')

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
        this.itemsNames().then((items) => {
            const itemsTitles = Array.from(items, item => item.innerText)
            // @ts-ignore
            expect(itemsTitles).to.be.sorted()
        })
        return this
    }

    itemsShouldBeSortedZtoA() {
        this.itemsNames().then((items) => {
            const itemsTitles = Array.from(items, item => item.innerText)
            // @ts-ignore
            expect(itemsTitles).to.be.sorted({descending: true})
        })
    }

    itemsShouldBeSortedByLowPrice() {
        this.itemsPrices().then((items) => {
            const prices = Array.from(items, item => parseFloat(item.innerText.replace('$', '')))
            //@ts-ignore
            expect(prices).to.be.sorted()
        })
    }

    itemsShouldBeSortedBeHighPrice() {
        this.itemsPrices().then((items) => {
            const prices = Array.from(items, item => parseFloat(item.innerText.replace('$', '')))
            //@ts-ignore
            expect(prices).to.be.sorted({descending: true})
        })
    }

}

export default new ProductsPage()
