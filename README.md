# playwright-assessment
Playwright Assessment

## Overview

Added the E2E scenarios to test the American express card flow for the assessment.

## Dependencies

* [NodeJS](https://nodejs.org/en/download/)
* [VS Code](https://code.visualstudio.com/download) (Optional)
* [VS Code Playwright Extension](https://playwright.dev/docs/getting-started-vscode) (Optional)

## Installation

Prior to executing the tests, simply check out the project and issue the following command from the project root:

~~~
npm install
~~~

Playwright also provides the following command to install any potential missing dependencies (useful for CI environments):

~~~
npx playwright install-deps
~~~

## Execution

The spec files are located in the `$PROJECT_ROOT/tests` directory and is the location that Playwright searches for test scripts.  Newly developed tests created under this location and can be executed via NPM or NPX from the `$PROJECT_ROOT` directory:

~~~
npm run <run-script>
~~~

where `run-script` is the name of the NPM script defined in the `package.json` file.  For instance:

~~~
npm run test-E2E
~~~

This would trigger the script added in the package.json 
  
"test-E2E":"npx playwright test --grep=@E2E --project=chromium"

**grep** this trigger the test tagged with the value '@E2E'
**project**- Uses the chromium project configurtion

**_In the E2E script added the validations for the below mentioned scenarios_**
1. Open Link 1: FR  Homepage (https://www.americanexpress.com/fr-fr/?inav=NavLogo) -> click on “Cartes American Express” ->
2. Opens Link2: FR All cards ( https://www.americanexpress.com/fr/carte-de-paiement/types-cartes/cartes-proprietaires/?intlink=fr-fr-hp-product1-all-pry_cartes-01032021) -> clicks on “En Savior Plus” Under “Cartes Gold American Express” -> 
3. Link3 Gold Card Description page: ( https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderailPlease ) -> clicks on Demandez Votre Carte ->
. Link 4: Comes to pages for User details (https://www.americanexpress.com/fr-fr/charge-cards/apply/personal/gold?sourcecode=A0000FE43V&intlink=fr-amex-cardshop-details-apply-GoldCardAmericanExpress-siderail) -> Fill junk data -> Clicks on “Sauvegarder et Continuer” for basic user validations.

