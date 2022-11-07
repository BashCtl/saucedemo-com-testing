class ProductsPage {
    private pageTitle = () => cy.get('.title')

    checkPageTitle(title) {
        this.pageTitle().should('have.text', title)
        return this
    }

}

export default new ProductsPage()
