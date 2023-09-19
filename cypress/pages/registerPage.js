export class registerPage {

    weblocators = {

        firstname: "#input-firstname",
        lastname: "#input-lastname",
        email: "#input-email",
        phone: "#input-telephone",
        password: "#input-password",
        con_password: "#input-confirm",
        policycheck: "input[type='checkbox']",
        continuebtn: ".btn btn-primary"
    }

    openURL() {
        cy.visit(Cypress.env("URL"))
    }

    enteruserdetails(fname, lname, email, phone) {
        cy.get(this.weblocators.firstname).type(fname)
        cy.get(this.weblocators.lastname).type(lname)
        cy.get(this.weblocators.email).type(email)
        cy.get(this.weblocators.phone).type(phone)

    }


}