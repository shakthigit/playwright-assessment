import { Page } from "@playwright/test";
export default class AllCards {
    
    constructor(public page:Page) {
        this.page = page;
    }


    
/**
 * Click on En savoir plus
 */
    async ClickOnCartesAmericanExpress_EnSavoirPlus() {
    await this.page.locator("//*[contains(text(), 'Carte Gold American Express')]//following::span[contains(text(),'En savoir plus')]").first().click();
    await this.page.waitForLoadState("domcontentloaded");
    await this.page.waitForTimeout(2000);
    }
}