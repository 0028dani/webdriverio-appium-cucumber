const { Given, When, Then } = require('@wdio/cucumber-framework');

const findElements = require('../../pageobjects/android/findElements-page');

Given(/^que verifica a lista (.*) primeira tela$/, async (lista) => {
    await findElements.validaElements(lista.split(","));
});

When(/^clico em App$/, async () => {
    await findElements.botaoApp.click();
});

Then(/^a (.*) vai esta verificada$/, async (palavra) => {
   await expect(findElements.Fragment).toHaveText(palavra) 
});

Given(/^que estou na tela Activity$/, async () => {
    await findElements.botaoApp.click();
    await findElements.botaoActivity.click()
 });

When(/^clicar no botao Secure Surfaces$/, async () => {
    await findElements.botaoSecure.click()
 });

Then(/^deve ocorrer o scroll com sucesso$/, async () => {
    await expect(findElements.SecureDialog).toExist();
    await expect(findElements.SecureSurfaceView).toExist();
    await expect(findElements.SecureWindow).toExist();
 });