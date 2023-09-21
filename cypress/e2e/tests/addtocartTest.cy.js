import { homePage } from "../../pages/homePage"
const homeObj = new homePage()
import addtocartdata from '../../fixtures/addtocartdata.json'

describe("add to cart products", () => {

    before(() => {

        cy.login(addtocartdata.login.username, addtocartdata.login.password)
    }

    )


    it('Add to cart products', () => {
        homeObj.searchProducts(addtocartdata.products.product_name)
        homeObj.addToCart()
        homeObj.verifySuccessMessage().should('contain', addtocartdata.message.successmessage).and('contain', addtocartdata.products.product_name);
    })
})
