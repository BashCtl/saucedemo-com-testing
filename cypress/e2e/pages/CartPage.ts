/// <reference types="cypress-xpath" />

class CartPage {
    private productName = () => cy.get('.inventory_item_name')
    private checkoutBtn = () => cy.get('#checkout')
    private continueShoppingBtn = () => cy.get('#continue-shopping')
    private removeItemBtn = (itemName) => cy.xpath(`//*[text()="${itemName}"]/../following-sibling::div[@class="item_pricebar"]//button`)

    checkProductPresents(productName) {
        this.productName().then((products) => {
            expect(products).to.contain(productName)
        })
        return this
    }

    clickCheckoutBtn() {
        this.checkoutBtn().click()
    }

    clickContinueShoppingBtn() {
        this.continueShoppingBtn().click()
    }

    removeItem(item) {
        this.removeItemBtn(item).click()
        return this
    }

    checkItemNotPresent(item){
        cy.contains(item).should('not.exist')
        return this
    }
}

export default new CartPage()
