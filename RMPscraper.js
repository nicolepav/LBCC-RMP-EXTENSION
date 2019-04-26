const pup = require("puppeteer")
const cheerio = require("cheerio")

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.ratemyprofessors.com/');
  
  await page.click('a[id=findProfessorOption]')

  await page.$eval('input[name=schoolName]', el => el.value = "lbcc");
  await page.$eval('input[id=searchProfessorName]', el => el.value = "Ryan Carroll");
  await page.click('input[name=_action_search]');

  await browser.close();
})();