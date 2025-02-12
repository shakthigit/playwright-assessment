import { Page } from "@playwright/test";
export default class HomePage {
    
    constructor(public page:Page) {
        this.page = page;
    }
    /**
     * Navigate to the URL
     */
    async NavigationUrl() {
        const baseURL = "https://www.americanexpress.com";
        await this.page.goto(baseURL+"/fr-fr/?inav=NavLogo");
        await this.page.waitForLoadState("domcontentloaded");

    }
    /**
     * Click on Accept All Cookies
     */
    async ClickOnCookiesAcceptAll() {
        await this.page.waitForTimeout(5000);
        const cookieLocator = this.page.locator("#user-consent-management-granular-banner-accept-all-button");
    const AccceptAll = await cookieLocator.isVisible();
    console.log(AccceptAll);
    if (AccceptAll) {
        await cookieLocator.click();
        console.log("Clicked on Accept All");
    }
    }

    /**
     * Click on Cartes American Express
     */
    async ClickOnCartesAmericanExpress() {
        await this.page.waitForSelector("//*[contains(text(), 'Cartes American Express')]");
        await this.page.click("//*[contains(text(), 'Cartes American Express')]");
    }
}