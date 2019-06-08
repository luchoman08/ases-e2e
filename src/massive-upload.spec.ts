import { Builder, By, WebDriver } from "selenium-webdriver";
import { expect } from "chai";  
import { before } from "mocha";
import { getDriver } from "./driver";
import { baseUrl, courseId, instanceId } from "./config";
import { generateUrl } from "./lib";



describe("Massive upload", function () {
    let driver: WebDriver;
    this.timeout(60000);
    before(async ()=> {
        driver = await getDriver();
        await driver.navigate().to(generateUrl(baseUrl, 'blocks/ases/view/massive_upload.php', courseId, instanceId));
    })
    it("should have the cohort selector", async function () {
        const el = await driver.findElement(By.id('cohorts'))
        expect(el).not.eq(undefined);
    });
    it("should have the massive upload selector", async function () {
        const el = await driver.findElement(By.id('endpoints'))
        expect(el).not.eq(undefined);
    });
    it("should have form for send file", async function () {
        const el = await driver.findElement(By.id('form-send-file'));
        expect(el).not.eq(undefined);
    });
    it("should fail with bad user massive upload csv file", async function () {
        await driver
        .findElement(By.name('fileToUpload'))
        .sendKeys(`${__dirname}/../mock_files/massive_upload/update_condicion_excepcion.csv`);
        await driver
        .findElement(By.id('endpoints'))
        .sendKeys('ases_user');
        await driver
        .findElement(By.id('send-file'))
        .click();
        const alert_messages = await driver.findElement(By.xpath("/span[@id='user-notifications']"))
        console.log(alert_messages);
    });
});