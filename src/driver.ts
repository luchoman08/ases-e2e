import { Builder } from "selenium-webdriver";
var initedDriver = false;
var driver = null; 
let baseUrl = "http://192.168.117.40/moodle35_ases";

async function initDriver() {
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(baseUrl);
    initedDriver = true;
} 
export async function getDriver() {
    if(!initedDriver) {
        await initDriver();
    }
    return driver;
}

