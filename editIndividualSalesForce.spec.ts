import { chromium ,test} from "@playwright/test";


test("Login to LeafTap Application and Edit Individual", async()=>{

   const browser=await chromium.launch({ headless: false, channel:"chrome" });

   const browserContext=await browser.newContext();

   const page=await browserContext.newPage();

   await page.goto("https://login.salesforce.com/");

 
   await page.locator("#username").fill("hari.radhakrishnan@qeagle.com");

   await page.locator("#password").fill("Testleaf@1234");

   await page.locator("#Login").click();

   await page.waitForLoadState("load");

    await page.locator(".slds-icon-waffle").click();

    await page.locator("//button[text()='View All']").click();

    await page.locator("//input[@placeholder='Search apps or items...']").fill("individuals");

    await page.locator("//lightning-formatted-rich-text//mark[text()='Individuals']").click();

    await page.locator("//a[@title='Individuals']").click();


    //await page.locator("//input[@placeholder='Search this list...']").fill("Mike");


    //await page.keyboard.press("Enter");

    await page.locator("//a[@title='Mike']/ancestor::th/following-sibling::td[5]//a").click();

    await page.locator("//a[@title='Edit']").click();

    await page.waitForTimeout(100);

    await page.locator("(//a[@class='select'])[1]").click();

    await page.locator("//li[@class='uiMenuItem uiRadioMenuItem']/a[@title='Mr.']").click();

    await page.locator("//button[@title='Save']").click();



    












}

)