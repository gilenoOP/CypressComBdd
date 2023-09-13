/// <reference types ="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import login_page from "../pages/login_page"
const homePageEl = require("../page_elements/home_page_elements.json")

Given ("I am on Home page", () =>{
    cy.visit("/")
})

When ("I click login link", () =>{
    cy.get(homePageEl.HomePageElements.login_link).click()
})

Then ("the system displays the login screen", () =>{
    login_page.validateLoginScreen()
})


Given ("I am on login screen", () =>{
    login_page.accessLogin()
})

When ("I click login", () =>{
    login_page.clickLogin()
})

Then ("I see the message {string}", (message) =>{
    login_page.validateMessage(message)
})


Given ("I fill password {string}", (password) =>{
    login_page.fillPassword(password)
})


Given ("I fill my credentials {string}, {string}", (email, password) =>{
    login_page.fillCredentials(email, password)
})


Given ("I fill e-mail {string}", (email) =>{
    login_page.fillEmail(email)
})


Then ("system performs login", () =>{
    login_page.validateLoginSuccess()
})


Given ("I am logged", () =>{
    login_page.accessLogin()
    login_page.realizeLogin()
})

When ("I click logout", () =>{
    login_page.clickLogout()
})

Then ("system logs off successfully", () =>{
    login_page.validateLogoutSuccess()
})