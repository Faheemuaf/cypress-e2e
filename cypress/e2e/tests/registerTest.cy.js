
import { registerPage } from "../../pages/registerPage"
const registerOjb = new registerPage()
import registerdata from '../../fixtures/registerdata.json'


describe("test automation with cypress", () => {


    it("registerflow", () => {
        registerOjb.openURL()
        registerOjb.enteruserdetails(registerdata.firstname, registerdata.lastname, registerdata.email, registerdata.phone,
            registerdata.password, registerdata.con_password, registerdata.policycheck, registerdata.continuebtn)

    })
})