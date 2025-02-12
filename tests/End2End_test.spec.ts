import { test } from "@playwright/test";
import HomePage from "../pageobjects/HomePage";
import AllCards from "../pageobjects/AllCards";
import GoldCardDescrp from "../pageobjects/GoldCardDescrp";
import UserDetails from "../pageobjects/UserDetails";
/**
 * End to End Test for Fr Credit card Application
 * Covered all the 4 scenarios in the test
 */
test.describe("End to End Test for Fr Credit card Application", () => {
    test("End to End Test  @End2EndCardFlow", async ({ page }) => {
        const homePage = new HomePage(page);
        //Scenario1: User navigates to the URL and clicks on Cartes American Express
        await homePage.NavigationUrl();
        await homePage.ClickOnCookiesAcceptAll();
        await homePage.ClickOnCartesAmericanExpress();
        await homePage.ClickOnCookiesAcceptAll();
        //Scenario2: User clicks on En savoir plus under Cartes Gold American Express
        const allCards = new AllCards(page);
        await allCards.ClickOnCartesAmericanExpress_EnSavoirPlus();
        //Scenario3: User clicks on Demandez votre Carte
        const goldCardDescrp = new GoldCardDescrp(page);
        await goldCardDescrp.ClickOnDemandezVotreCarte();
        //Scenario4: User fills the user details
        const userDetails = new UserDetails(page);
        await userDetails.fillUserDetails();
    });
});