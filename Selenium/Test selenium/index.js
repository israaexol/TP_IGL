const {Builder, By, Key, util} = require("selenium-webdriver");
async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("localhost:3000");
    driver.findElement(By.id("mail")).sendKeys("hi_hamdine@esi.dz");
    driver.sleep(3000);
    driver.findElement(By.id("mdp")).sendKeys("esi2020");
    driver.sleep(3000);
    driver.findElement(By.id("se-connecter")).click();

}
example();