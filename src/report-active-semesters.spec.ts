import { Builder, By, WebDriver } from "selenium-webdriver";
import { expect } from "chai";  
import { before } from "mocha";
import { getDriver, getLoggedDriver } from "./driver";
import { baseUrl, courseId, instanceId } from "./config";
import { generateUrl } from "./lib";


describe("Report active semesters", function() {
    var driver: WebDriver;
    this.timeout(60000);
    before(async ()=> {
       driver =  await getLoggedDriver();
       await driver.navigate().to(generateUrl(baseUrl, 'blocks/ases/view/report_active_semesters.php', courseId, instanceId));
    });
    it("should have a report table", async function () {
        const el = await driver
        .findElement(By.id('tableActiveSemesters'));
        expect(el).to.not.be.eq(undefined);
        
    });
    it("should have a cohort selector", async function () {
        const el = await driver
        .findElement(By.id('cohorts'));
        expect(el).to.not.be.eq(undefined);
    });
    it("should have results", async function() {
        const els = await driver
        .findElements(By.className('codigo'));
        expect(els.length).to.be.lt(1);
    });
    it("should have graph", async function() {
        const graph = await driver
        .findElement(By.className('active_semesters_graphs'))
        expect(graph).to.not.null;
    });
})