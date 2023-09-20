export class registerPage {

    weblocators = {

        firstname: "#input-firstname",
        lastname: "#input-lastname",
        email: "#input-email",
        phone: "#input-telephone",
        password: "#input-password",
        con_password: "#input-confirm",
        policycheck: "input[type='checkbox']",
        continuebtn: ".pull-right > .btn"
    }

    openURL() {
        cy.visit(Cypress.env("URL"))
    }


    enteruserdetails(registerdata) {
        cy.get(this.weblocators.firstname).type(toString(registerdata.firstname))
        cy.get(this.weblocators.lastname).type(registerdata.lastname)
        cy.get(this.weblocators.email).type(registerdata.email)
        cy.get(this.weblocators.phone).type(registerdata.phone)
        cy.get(this.weblocators.password).type(registerdata.password)
        cy.get(this.weblocators.con_password).type(registerdata.con_password)
        cy.get(this.weblocators.policycheck).check()
        cy.get(this.weblocators.continuebtn).click()
    }

    // enteruserdetails(fname, lname, email, phone, password, con_password, policycheck, continuebtn) {
    //     cy.get(this.weblocators.firstname).type(fname)
    //     cy.get(this.weblocators.lastname).type(lname)
    //     cy.get(this.weblocators.email).type(email)
    //     cy.get(this.weblocators.phone).type(phone)
    //     cy.get(this.weblocators.password).type(password)
    //     cy.get(this.weblocators.con_password).type(con_password)
    //     cy.get(this.weblocators.policycheck).check()
    //     cy.get(this.weblocators.continuebtn).click()
    // }


}