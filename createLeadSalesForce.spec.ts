import { chromium ,test} from "@playwright/test";


test("Login to LeafTap Application and Create Lead", async()=>{

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

    await page.locator("//a//p[text()='Sales']").click();
     
    await page.locator("//a[@title='Leads']").click();

    await page.waitForTimeout(1000);

    await page.locator("//a[@title='New']").click();

    await page.locator("//input[@name='lastName']").fill("John");


     await page.locator("//input[@name='Company']").fill("leaf");

     await page.locator("//button[@name='salutation']").click();

     await page.locator("//lightning-base-combobox-item[@data-value='Mr.']").click();

     await page.locator("//button[text()='Save']").click();






}

)
