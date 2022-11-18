class SauceLabsPage {
    private navSauceLabsLogo = () => cy.get('.nav-image')

    sauceLabsLogoShouldBeVisible() {
        this.navSauceLabsLogo().should('be.visible')
        return this
    }
}

export default new SauceLabsPage()
