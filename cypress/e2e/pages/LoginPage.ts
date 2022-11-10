class LoginPage {
    private usernameInput = () => cy.get('#user-name')
    private passwordInput = () => cy.get('#password')
    private loginBtn = () => cy.get('#login-button')
    private errorMsg = () => cy.get('[data-test="error"]')

    navigate() {
        cy.visit('')
        return this
    }

    enterUsername(username) {
        this.usernameInput().clear().type(username)
        return this
    }

    enterPassword(password) {
        this.passwordInput().clear().type(password)
        return this
    }

    clickLoginBtn() {
        this.loginBtn().click()
        return this
    }

    checkLoginError(error) {
        this.errorMsg().should('contain', error)
        return this
    }

    loginBtnShouldBeVisible() {
        this.loginBtn().should('be.visible')
        return this
    }
}

export default new LoginPage()
