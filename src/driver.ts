import { Builder, WebDriver, By, Capabilities } from "selenium-webdriver";
import { 
    baseUrl,
    userName,
    password as globalPassword
} from "./config";
var initedDriver = false;
var driver: WebDriver;

async function initDriver(width? : number) {
    
    driver = await new Builder()
    .forBrowser('firefox')
    .build();
    await driver.get(baseUrl);
    initedDriver = true;
} 
export async function getDriver() {
    if(!initedDriver) {
        await initDriver();
    }
    return driver;
}
export async function getLoggedDriver(username?: string, password?: string, width?: number) {
    if(!initedDriver) {
        await initDriver();
    }
    await driver.navigate().to(`${baseUrl}/login/index.php`);
    await driver
    .findElement(By.id('username'))
    .sendKeys(username? username: userName);
    
    await driver
    .findElement(By.id('password'))
    .sendKeys(password? password: globalPassword);
    var logginButton = await driver
    .findElement(By.xpath('//form/*[@id="loginbtn"]'));
    console.log(logginButton, 'login button');
    await logginButton.click();
    return driver;
}

