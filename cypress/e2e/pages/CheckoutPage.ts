class CheckoutPage {

    private firstNameInput = () => cy.get('[name="firstName"]')
    private lastnameInput = () => cy.get('[name="lastName"]')
    private postalCodeInput = () => cy.get('#postal-code')
    private continueBtn = () => cy.get('#continue')
    private finishBtn = () => cy.get('#finish')
    private cancelBtn = () => cy.get('#cancel')
    private completeHeader = () => cy.get('.complete-header')
    private backHomeBtn = () => cy.get('#back-to-products')
    private errorMsg = () => cy.get('.error-message-container h3')

    enterFirstname(firstname) {
        this.firstNameInput().clear().type(firstname)
        return this
    }

    enterLastname(lastname) {
        this.lastnameInput().clear().type(lastname)
        return this
    }

    enterPostalCode(postalCode) {
        this.postalCodeInput().clear().type(postalCode)
        return this
    }

    clickContinueBtn() {
        this.continueBtn().click()
        return this
    }

    clickCancelBtn() {
        this.cancelBtn().click()
        return this
    }

    clickFinishBtn() {
        this.finishBtn().click()
        return this
    }

    checkCompleteHeader(header) {
        this.completeHeader().should('have.text', header)
        return this
    }

    clickBackHomeBtn() {
        this.backHomeBtn().click()
    }

    checkErrorMsg(error) {
        this.errorMsg().should('contain', error)
        return this
    }
}

export default new CheckoutPage()
