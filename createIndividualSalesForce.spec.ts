import { chromium ,test} from "@playwright/test";


test("Login to LeafTap Application and Create Individual", async()=>{

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

    await page.locator("//a[@title='Individuals']/following-sibling::one-app-nav-bar-item-dropdown//one-app-nav-bar-menu-button[@class='slds-dropdown-trigger slds-dropdown-trigger--click']").click();

    await page.locator("//span[text()='New Individual']").click();

    await page.waitForTimeout(1000);

    await page.locator("//input[@placeholder='Last Name']").fill("Mike");

    await page.locator("//button[@title='Save & New']/following-sibling::button[@title='Save']").click();









}

)
