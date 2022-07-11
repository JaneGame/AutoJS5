const puppeteer = require("puppeteer");
const { clickButton, chooseSession, chooseTicket } = require("./lib/commands");
const { numberPlace } = require("./lib/utils");
const session = '.movie-seances__time';
const place = ".buying-scheme__chair";
let page;


beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("Ticket buy tests", () => {

  test("Today's session", async () => {
    await chooseSession(page, session, 1);
    await chooseTicket(page, place, await numberPlace(page));
    await clickButton(page, 'button');
    await page.waitForSelector('.ticket__info-wrapper');
    await clickButton(page, 'button');
    await page.waitForSelector('h2');
    const ticket = await page.$eval('h2', element => element.textContent);
    expect(ticket).toContain('Электронный билет');
  });

  test("Next day's session", async () => {
    const day = await page.$$('.page-nav__day');
    await day[1].click();
    await chooseSession(page, session, 2);
    await chooseTicket(page, place, await numberPlace(page));
    await clickButton(page, 'button');
    await page.waitForSelector('.ticket__info-wrapper');
    await clickButton(page, 'button');
    await page.waitForSelector('h2');
    const ticket = await page.$eval('h2', element => element.textContent);
    expect(ticket).toContain('Электронный билет');
  });

  test("No tickets session", async () => {
    const day = await page.$$('.page-nav__day');
    await day[1].click();
    await chooseSession(page, session, 1);
    await chooseTicket(page, place, 1);
    const button = await page.$eval("button", element => element.getAttribute('disabled'));
    expect(button).toEqual("true");
  });

});

