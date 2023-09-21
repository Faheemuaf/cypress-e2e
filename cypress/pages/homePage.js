export class homePage {

    weblocators = {

        search_products: 'input[name="search"]',
        click_icon: ".btn.btn-default.btn-lg",
        product: "#search[title='mac']",
        addtocard: "Add to Cart",
        successmessage: ".alert.alert-success.alert-dismissible"
    }


    searchProducts(product_name) {
        cy.get(this.weblocators.search_products).type(product_name)
        cy.get(this.weblocators.click_icon).click()

    }

    addToCart() {
        cy.contains(this.weblocators.addtocard).first().click()

    }

    verifySuccessMessage() {
        return cy.get(this.weblocators.successmessage)


    }

}
