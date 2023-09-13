/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import home_page from "../pages/home_page"

When ("I access the aplication url", () =>{
    cy.visit ("/")
})

Then ("the system displays the information from the home page", () =>{
    home_page.validateHomePageScreen()
})