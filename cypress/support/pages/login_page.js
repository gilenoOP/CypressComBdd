/// <reference types ="cypress" />

const homePageEl = require("../page_elements/home_page_elements.json")
const loginPageEl = require("../page_elements/login_page_elements.json")
import "cypress-real-events/support"

let user = ""
let userPassword = ""

export default{
    validateLoginScreen(){
        cy.visit("/")
            .get(homePageEl.HomePageElements.login_link)
                .click()
                .url().should('eq', 'https://automationpratice.com.br/login')
            .get(loginPageEl.LoginPageElements.top_header_left_text)
                .should("be.visible")
                .should("have.text", "Promoções especiais disponíveis.Aproveitar...")
            .get(loginPageEl.LoginPageElements.top_header_left_link)
                .should("be.visible")
                .should("have.text", "Aproveitar...")
                .should("have.attr", "href")
            .get(loginPageEl.LoginPageElements.user_icon)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.login_link)
                .should("be.visible")
                .should("have.text", " Login")
            .get(loginPageEl.LoginPageElements.lock_icon)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.register_link)
                .should("be.visible")
                .should("have.text", " Cadastro")
            .get(loginPageEl.LoginPageElements.logo)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.main_menu_one)
                .should("be.visible")
                .should("contain", "Home")
            .get(loginPageEl.LoginPageElements.main_menu_two)
                .should("be.visible")
                .should("contain", "Shop")
            .get(loginPageEl.LoginPageElements.main_menu_three)
                .should("be.visible")
                .should("contain", "Pages")
            .get(loginPageEl.LoginPageElements.heart_icon)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.shopping_bag_icon)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.search_icon)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.login_form)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.title_form)
                .should("be.visible")
                .should("have.text", "Login")
            .get(loginPageEl.LoginPageElements.email_label)
                .should("be.visible")
                .should("have.text", "E-mail*")
            .get(loginPageEl.LoginPageElements.email_field)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.password_label)
                .should("be.visible")
                .should("have.text", "Senha*")
            .get(loginPageEl.LoginPageElements.password_field)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.login_button)
                .should("be.visible")
                .should("have.text", "login")
            .get(loginPageEl.LoginPageElements.remember_checkbox)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.remember_label)
                .should("be.visible")
                .should("have.text", "Lembrar de mim")
            .get(loginPageEl.LoginPageElements.create_account_link)
                .should("be.visible")
                .should("have.text", "Ainda não tem conta?")
                .should("have.attr", "href")
            .get(loginPageEl.LoginPageElements.footer)
                .should("be.visible")
            .get(loginPageEl.LoginPageElements.go_top_button)
                .should("be.visible")
    },

    accessLogin(){
        cy.visit('/')
            .get(homePageEl.HomePageElements.login_link)
                .click()
    },

    fillEmail(email){
        cy.get(loginPageEl.LoginPageElements.email_field)
            .type(email)
    },

    fillPassword(password){
        cy.get(loginPageEl.LoginPageElements.password_field)
            .type(password)
    },

    fillCredentials(email, password){
        user = email
        userPassword = password
        cy.get(loginPageEl.LoginPageElements.email_field)
            .type(email)
        cy.get(loginPageEl.LoginPageElements.password_field)
            .type(password)
    },

    clickLogin(){
        cy.get(loginPageEl.LoginPageElements.login_button)
            .click()
    },

    clickRememberCheckBox(){
        cy.get(loginPageEl.LoginPageElements.remember_checkbox)
            .click()
    },

    clickLogout(){
        cy.get(loginPageEl.LoginPageElements.userLogged)
            .realHover()
        cy.get(loginPageEl.LoginPageElements.logoutOption)
            .should("be.visible")
            .click()
    },

    validateMessage(message){
        cy.get(loginPageEl.LoginPageElements.message_span)
            .should("have.text", message)
    },

    validateLoginSuccess(){
        cy.url()
            .should("contain", "/my-account")
        cy.get(loginPageEl.LoginPageElements.loginSuccessMsg)
            .should("be.visible")
            .should("have.text", "Login realizado")
        cy.get(loginPageEl.LoginPageElements.welcomeMsg)
            .should("be.visible")
            .should("have.text", `Olá, ${user}`)
        cy.get(loginPageEl.LoginPageElements.loginConfirmButton)
            .click()
        cy.get(loginPageEl.LoginPageElements.userLogged)
            .should("be.visible")    
            .should("contain", `${user}`)
    },

    validateLoginDetailsFilledAutomatically() {
        cy.get(loginPageEl.LoginPageElements.email_field)
            .should("be.visible")
            .should("have.text", `${user}`)
        cy.get(loginPageEl.LoginPageElements.password_field)
            .should("be.visible")
            .should("have.text", `${userPassword}`)
        cy.get(loginPageEl.LoginPageElements.remember_checkbox)
            .should("be.checked")
    },

    validateAutomaticLogin(){
        cy.get(loginPageEl.LoginPageElements.userLogged)
            .should("be.visible")    
            .should("contain", `${user}`)
    },

    realizeLogin(){
        cy.get(loginPageEl.LoginPageElements.login_button)
            .click()
        cy.get(loginPageEl.LoginPageElements.loginConfirmButton)
            .click()
    },

    realizeLogout(){
        cy.get(loginPageEl.LoginPageElements.userLogged)
            .realHover()
        cy.get(loginPageEl.LoginPageElements.logoutOption)
            .should("be.visible")
            .click()
        cy.get(loginPageEl.LoginPageElements.logoutConfirmButton)
            .click()
    },

    validateLogoutSuccess(){
        cy.get(loginPageEl.LoginPageElements.loginSuccessMsg)
            .should("be.visible")
            .should("have.text", "Logout realizado")
        cy.get(loginPageEl.LoginPageElements.logoutConfirmButton)
            .click()
        cy.url()
            .should("contain", "/login")
    },

    fecharBrowser(){
        cy.window().then(win => win.close())
        cy.wait(1000)
        
    }
}