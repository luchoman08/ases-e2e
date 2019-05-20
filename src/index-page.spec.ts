import { Builder, By, WebDriver } from "selenium-webdriver";
import {expect } from "chai";  
import { before } from "mocha";
describe("Test index page", async function ()  {
    this.timeout(60000);
    let driver: WebDriver;
    before(async () => {
        driver = await new Builder().forBrowser('firefox').build();
        await driver.get("https://campusvirtual.univalle.edu.co");
    });
    it('check the page title', async () => {
        const title = await driver.getTitle();
        expect(title).to.equal('Campus Virtual');
    });
    it('check the page login form', async () => {
        const form = driver.findElement(By.xpath("//form[@action='https://campusvirtual.univalle.edu.co/moodle/login/index.php']"));
        expect(form).to.not.false;
    });
    after(async () => {
        await driver.close();
    })     
})