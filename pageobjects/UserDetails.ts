import { Page,expect } from "@playwright/test";
export default class AllCards {
    
    constructor(public page:Page) {
        this.page = page;
    }

    /**
     * Fill user details
     */
    async fillUserDetails() {
        await this.page.click("//label[@for='MR']");
        const isChecked = await this.page.isChecked("//label[@for='MR']");
        expect(isChecked).toBe(true);
        
        await this.page.waitForSelector("//input[@name='firstName']");
        await this.page.locator("//input[@name='firstName']").fill("TestUser");
        await this.page.locator("//input[@name='lastName']").fill("TestUser");
        await this.page.locator("//input[contains(@id, 'dateOfBirth')]").fill("01/01/1990");
        await this.page.locator("//input[@name='email']").fill("testuser@gmail.com");
        await this.page.locator("//input[@name='mobilePhoneNumber']").fill("0612345678");
        await this.page.locator("//button[contains(text(), 'Sauvegarder et Continuer')]").click();
        //Submitted and moved to next page
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.waitForSelector("//input[@name='birthName']");
        await this.page.locator("//input[@name='birthName']").fill("TestUser");
        await this.page.locator("//input[@name='placeOfBirth']").fill("France");
        await this.page.selectOption("//select[@name='departmentOfBirth']", { index: 1 });
        await this.page.selectOption("//select[@name='countryOfBirth']", { index: 0 });
        await this.page.selectOption("//select[@name='nationality']", { index: 0 });
        await this.page.selectOption("//select[@name='country']", { index: 0 });
        await this.page.locator("//input[@name='residentialAddressLine2']").fill("TestUser Address");
        await this.page.locator("//input[@name='postcode']").fill("67555");
        await this.page.locator("//input[@name='cityTown']").fill("TestUser Address");
        await this.page.selectOption("//select[@name='personalResidentialStatus']", { index: 1 });
        await this.page.waitForTimeout(2000);
        await this.page.locator("//button[contains(text(), 'Sauvegarder et Continuer')]").click();
        //Submitted and moved to next page
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.waitForSelector("//input[contains(@id, 'bankAccountNumber')]");
        await this.page.locator("//input[contains(@id, 'bankAccountNumber')]").fill("FR1420041010050500013M02606");
        await this.page.locator("//input[@name='bankIdentifierCode']").fill("CMCIFRPP");
        await this.page.selectOption("//select[contains(@name, 'tenureOfAccount')]", { index: 1 });
        await this.page.locator("//input[@name='annualPersonalIncome']").fill("10000");
        await this.page.locator("//label[@for='hasAdditionalIncome1-NO']").click();
        await this.page.selectOption("//select[contains(@name, 'totalAssets')]", { index: 1 });
        await this.page.selectOption("//select[contains(@name, 'occupation')]", { index: 1 });
        await this.page.selectOption("//select[contains(@name, 'occupationDescription')]", { index: 1 });
        await this.page.locator("//input[@name='sirenNumber']").fill("652008442");
        await this.page.locator("//input[@name='employerName']").fill("TestCompany");
        await this.page.selectOption("//select[contains(@name, 'employmentDuration')]", { index: 1 });
        await this.page.locator("//button[contains(text(), 'Sauvegarder et Continuer')]").click();
        //Submitted and moved to next page
        await this.page.waitForTimeout(3000);
        await this.page.waitForLoadState("domcontentloaded");
        await this.page.waitForSelector("//input[@name='mothersMaidenName']");
        await this.page.locator("//input[@name='mothersMaidenName']").fill("TestUser");
        await this.page.locator("//input[@name='pin']").fill("1234");
        await this.page.locator("//input[@name='confirmPin']").fill("1234");
        await this.page.locator("//label[@for='marketingEmailPreferences-false']").click();
        await this.page.locator("//label[@for='marketingSMSPhonePostalPreferences-OPT_OUT']").click();
        await this.page.locator("//button[contains(text(), 'Soumettre')]").click();
    }
}