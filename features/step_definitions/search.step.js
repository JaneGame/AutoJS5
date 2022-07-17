const { Before, After } = require("@cucumber/cucumber");
const puppeteer = require("puppeteer");
const { clickButton, chooseSession, chooseTicket } = require("../../lib/commands");
const { numberPlace } = require("../../lib/utils");
const session = '.movie-seances__time';
const place = '.buying-scheme__chair';
const {Given, When, Then} = require('@cucumber/cucumber');
const {expect} = require('chai');
let page;


Before(async () => {
    const browser=await puppeteer.launch({ headless:false, slowMo:50 });
    const page=await browser.newPage();
    this.browser= browser;
    this.page= page;
});

After(async() => {
    if (this.browser) 
    {await this.browser.close();
    }
});

Given("user is on site page", async() =>{
await this.page.goto("http://qamid.tmweb.ru/client/index.php");
})

When ("user selects day 1", async() => {
    const day = await this.page.$$('.page-nav__day');
    await day[1].click();
})

When ('user chooses session {int}', async(int)  => {

    return await chooseSession(this.page, session, int);

})

When ("user chooses seat {int}", async(int) => {

    return await chooseTicket(this.page, place, int);

})

When ("user clicks submit button", async() => {

    await clickButton(this.page, 'button');
    await this.page.waitForSelector('.ticket__info-wrapper');
    await clickButton(this.page, 'button');
})


Then ("user sees the {string}", async(string) => {
    await this.page.waitForSelector('h2');
    const ticket = await this.page.$eval('h2', element => element.textContent);
    expect(ticket).contain(string);
})

Then ("ticket not buy", async() => {
    const button = await this.page.$eval("button", element => element.getAttribute('disabled'));
    expect(button).equal("true");
})