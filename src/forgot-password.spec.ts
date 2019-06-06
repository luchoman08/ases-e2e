import { By, WebDriver } from "selenium-webdriver";
import { expect } from "chai";  
import { before } from "mocha";
import { getDriver } from "./driver";
import { baseUrl } from "./config";
describe("Forgot password page", function() {
    let driver: WebDriver;
    this.timeout(60000);
    before(async ()=> {
        driver = await getDriver();
        await driver.navigate().to(`${baseUrl}/login/forgot_password.php`);
    });

    it("Should contain input 'id_username' to put the user info" , async ()  => {
        const el = await driver.findElement(By.id('id_username'));
        el.sendKeys('sistemas1008');
        const sendButton = await driver.findElement(By.id('id_submitbuttonusername'));
        await sendButton.click();
        expect(el).not.eq(undefined);
    });
} );
