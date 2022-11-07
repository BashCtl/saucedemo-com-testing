class LoginPage {
    private usernameInput = () => cy.get('#user-name')
    private passwordInput = () => cy.get('#password')
    private loginBtn = () => cy.get('#login-button')

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
    }
}

export default new LoginPage()
