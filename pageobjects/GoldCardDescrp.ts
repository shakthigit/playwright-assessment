import { Page } from "@playwright/test";
export default class GoldCardDescrp {
    
    constructor(public page:Page) {
        this.page = page;
    }


    
/**
 * Click on Demandez votre Carte
 */
    async ClickOnDemandezVotreCarte() {
        await this.page.locator("//*[contains(text(), 'Demandez votre Carte')]").first().click();
        await this.page.waitForLoadState("domcontentloaded");
    }
}