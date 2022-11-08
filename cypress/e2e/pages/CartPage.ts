
class CartPage {
    private productName = () => cy.get('.inventory_item_name')

    checkProductPresents(productName){
        this.productName().then((products)=>{
            expect(products).to.contain(productName)
        })
        return this
    }
}

export default new CartPage()
