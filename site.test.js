const puppeteer = require("puppeteer");
const { clickButton, chooseTicket } = require("./lib/commands");
const { number } = require("./lib/utils");
let page;


beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("Ticket buy tests", () => {

  test.only("Today's session", async () => {
    await chooseTicket(page, 'div ul li a', "div div span", number(97));
    await clickButton(page, 'button');
    await page.waitForSelector('.ticket__info-wrapper');
    await clickButton(page, 'button');
    await page.waitForSelector('h2');
    const ticket = await page.$eval('h2', element => element.textContent);
    expect(ticket).toContain('Электронный билет');
  });

  test("Next day's session", async () => {
    const day = await page.$$('nav a');
    await day[1].click();
    await chooseTicket(page, 'div ul li a', "div div span", 19);
    await clickButton(page, 'button');
    await page.waitForSelector('.ticket__info-wrapper');
    await clickButton(page, 'button');
    await page.waitForSelector('h2');
    const ticket = await page.$eval('h2', element => element.textContent);
    expect(ticket).toContain('Электронный билет');
  });

  test("No tickets session", async () => {
    await chooseTicket(page, 'div ul li a', "div div span", 19);
    const button = await page.$eval("button", element => element.getAttribute('disabled'));
    expect(button).toEqual("true");
  });

});

