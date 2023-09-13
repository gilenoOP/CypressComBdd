/// <reference types ="cypress" />

const homePageEl = require("../page_elements/home_page_elements.json")

export default {
    validateHomePageScreen(){
        cy.visit('/')
            .get(homePageEl.HomePageElements.top_header_left_text).should("be.visible")
            .get(homePageEl.HomePageElements.top_header_left_link).should("be.visible")
            .get(homePageEl.HomePageElements.user_icon).should("be.visible")
            .get(homePageEl.HomePageElements.login_link).should("be.visible")
            .get(homePageEl.HomePageElements.lock_icon).should("be.visible")
            .get(homePageEl.HomePageElements.register_link).should("be.visible")
            .get(homePageEl.HomePageElements.logo).should("be.visible")
            .get(homePageEl.HomePageElements.main_menu_one).should("be.visible")
            .get(homePageEl.HomePageElements.main_menu_two).should("be.visible")
            .get(homePageEl.HomePageElements.main_menu_three).should("be.visible")
            .get(homePageEl.HomePageElements.heart_icon).should("be.visible")
            .get(homePageEl.HomePageElements.shopping_bag_icon).should("be.visible")
            .get(homePageEl.HomePageElements.search_icon).should("be.visible")
            .get(homePageEl.HomePageElements.banner_slider).should("be.visible")
            .get(homePageEl.HomePageElements.banner_bottom_area).should("be.visible")
            .get(homePageEl.HomePageElements.top_product_area).should("be.visible")
            .get(homePageEl.HomePageElements.promotion_banner_area).should("be.visible")
            .get(homePageEl.HomePageElements.weekly_deal_area).should("be.visible")
            .get(homePageEl.HomePageElements.center_heading).should("be.visible")
            .get(homePageEl.HomePageElements.central_subtitle).should("be.visible")
            .get(homePageEl.HomePageElements.container_products).should("be.visible")
            .get(homePageEl.HomePageElements.footer).should("be.visible")
            .get(homePageEl.HomePageElements.go_top_button).should("be.visible")
    }
}