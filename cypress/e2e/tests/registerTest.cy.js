
import { registerPage } from "../../pages/registerPage"
const registerOjb = new registerPage()
import registerdata from '../../fixtures/registerdata.json'


describe ("test automation with cypress", ()=>{


    it("registerflow", ()=>{
        registerOjb.openURL()
        registerOjb.enteruserdetails(registerdata.firstname)
        registerOjb.enteruserdetails(registerdata.lastname)
        registerOjb.enteruserdetails(registerdata.email)
        registerOjb.enteruserdetails(registerdata.password)

    })
})