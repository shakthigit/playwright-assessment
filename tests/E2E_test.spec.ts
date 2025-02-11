import { chromium, test, expect } from '@playwright/test';


test("Card flow Link Validation  @E2E", async ({ page }) => {
    const baseURL = "https://www.americanexpress.com";

//*****************************Scenario-1************************************//
    //Link 1 Validation
    //Open Link 1: FR  Homepage (https://www.americanexpress.com/fr-fr/?inav=NavLogo) -> click on “Cartes American Express” ->
    await page.goto(baseURL+"/fr-fr/?inav=NavLogo");
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(3000);
    const cookieLocator = page.locator("#user-consent-management-granular-banner-accept-all-button");
    const AccceptAll = await cookieLocator.isVisible();
    console.log(AccceptAll);
    if (AccceptAll) {
        await cookieLocator.click();
        console.log("Clicked on Accept All");
    }
    await page.waitForLoadState("domcontentloaded");
    await page.waitForSelector("//*[contains(text(), 'Cartes American Express')]");
    await page.click("//*[contains(text(), 'Cartes American Express')]");
    if (AccceptAll) {
        await cookieLocator.click();
        console.log("Clicked on Accept All");
    }
    await page.waitForTimeout(2000);
    await page.waitForLoadState("domcontentloaded");

//*****************************Scenario-2************************************//
    //Opens Link2: FR All cards ( https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021) 
    // -> clicks on “En Savior Plus” Under “Cartes Gold American Express” -> 
    await page.locator("//*[contains(text(), 'Carte Gold American Express')]//following::span[contains(text(),'En savoir plus')]").first().click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(2000);

    //*****************************Scenario-3************************************//
    //Link3 Gold Card Description page: ( https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderailPlease ) 
    // -> clicks on Demandez Votre Carte ->

    await page.locator("//*[contains(text(), 'Demandez votre Carte')]").first().click();
    await page.waitForLoadState("domcontentloaded");
    
//*****************************Scenario-4************************************//
//Link 4: Comes to pages for User details (https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail) 
// -> Fill junk data -> Clicks on “Sauvegarder et Continuer” for basic user validations.
await page.waitForSelector("//label[@for='MR']");
await page.click("//label[@for='MR']");
    const isChecked = await page.isChecked("//label[@for='MR']");
    expect(isChecked).toBe(true);
    await page.waitForSelector("//input[@name='firstName']");
    await page.locator("//input[@name='firstName']").fill("TestUser");
    await page.locator("//input[@name='lastName']").fill("TestUser");
    await page.locator("//input[contains(@id, 'dateOfBirth')]").fill("01/01/1990");
    await page.locator("//input[@name='email']").fill("testuser@gmail.com");
    await page.locator("//input[@name='mobilePhoneNumber']").fill("0612345678");
    await page.locator("//button[contains(text(), 'Sauvegarder et Continuer')]").click();
    //Submitted and moved to next page
    await page.waitForLoadState("domcontentloaded");
    await page.waitForSelector("//input[@name='birthName']");
    await page.locator("//input[@name='birthName']").fill("TestUser");
    await page.locator("//input[@name='placeOfBirth']").fill("France");
    await page.selectOption("//select[@name='departmentOfBirth']", { index: 1 });
    await page.selectOption("//select[@name='countryOfBirth']", { index: 0 });
    await page.selectOption("//select[@name='nationality']", { index: 0 });
    await page.selectOption("//select[@name='country']", { index: 0 });
    await page.locator("//input[@name='residentialAddressLine2']").fill("TestUser Address");
    await page.locator("//input[@name='postcode']").fill("67555");
    await page.locator("//input[@name='cityTown']").fill("TestUser Address");
    await page.selectOption("//select[@name='personalResidentialStatus']", { index: 1 });
    await page.waitForTimeout(2000);
    await page.locator("//button[contains(text(), 'Sauvegarder et Continuer')]").click();
    //Submitted and moved to next page
    await page.waitForLoadState("domcontentloaded");
    await page.waitForSelector("//input[contains(@id, 'bankAccountNumber')]");
    await page.locator("//input[contains(@id, 'bankAccountNumber')]").fill("FR1420041010050500013M02606");
    await page.locator("//input[@name='bankIdentifierCode']").fill("CMCIFRPP");
    await page.selectOption("//select[contains(@name, 'tenureOfAccount')]", { index: 1 });
    await page.locator("//input[@name='annualPersonalIncome']").fill("10000");
    await page.locator("//label[@for='hasAdditionalIncome1-NO']").click();
    await page.selectOption("//select[contains(@name, 'totalAssets')]", { index: 1 });
    await page.selectOption("//select[contains(@name, 'occupation')]", { index: 1 });
    await page.selectOption("//select[contains(@name, 'occupationDescription')]", { index: 1 });
    await page.locator("//input[@name='sirenNumber']").fill("652008442");
    await page.locator("//input[@name='employerName']").fill("TestCompany");
    await page.selectOption("//select[contains(@name, 'employmentDuration')]", { index: 1 });
    await page.locator("//button[contains(text(), 'Sauvegarder et Continuer')]").click();
    //Submitted and moved to next page
    await page.waitForTimeout(3000);
    await page.waitForLoadState("domcontentloaded");
    await page.waitForSelector("//input[@name='mothersMaidenName']");
    await page.locator("//input[@name='mothersMaidenName']").fill("TestUser");
    await page.locator("//input[@name='pin']").fill("1234");
    await page.locator("//input[@name='confirmPin']").fill("1234");
    await page.locator("//label[@for='marketingEmailPreferences-false']").click();
    await page.locator("//label[@for='marketingSMSPhonePostalPreferences-OPT_OUT']").click();
    await page.locator("//button[contains(text(), 'Soumettre')]").click();








})
