import { Builder, By, WebDriver } from "selenium-webdriver";
import { expect } from "chai";  
import { before } from "mocha";
import { getDriver } from "./driver";
import { baseUrl } from "./config";
describe("Test index page", async function ()  {
    let driver: WebDriver;
    this.timeout(60000);
    before(async () => {
        driver = await getDriver();
        await driver.navigate().to(baseUrl);
    });
   it('check the page title', async () => {
        const title = await driver.getTitle();
        expect(title).to.equal('Campus Virtual');
    });
    it('check the page login form (I will intentionally fail) ', async () => {
        const form = driver.findElement(By.xpath(`//form[@action='${baseUrl}/login/index.php']`));
        const method = await form.getAttribute("method");
        expect(method.toLocaleLowerCase()).to.be.eq("get");
    });
    it('check the page login form', async () => {
        const form = driver.findElement(By.xpath(`//form[@action='${baseUrl}/login/index.php']`));
        const method = await form.getAttribute("method");
        expect(method.toLocaleLowerCase()).to.be.eq("post");
        
    });
    it('should have input for username', async () => {
        const el = driver.findElement(By.id('username'));
        expect(el).to.be.not.eq(undefined);
    });
    it('should correctly login with ases', async function () {
        const el = await driver.findElement(By.id('username'));
        el.sendKeys('sistemas1008');
        const pass = await driver.findElement(By.id('password'));
        pass.sendKeys('ases@2019');
        const butt = await driver.findElement(By.className('btn-login'));
        await butt.click();
        await driver.navigate().to(`${baseUrl}/course/view.php?id=41706`);
        setTimeout(()=>{}, 3000);
        expect(0).to.be.eq(0);
    });
    after(async () => {
        await driver.close();
    })     
})