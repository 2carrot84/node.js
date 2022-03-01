const puppeteer = require("puppeteer");
const cheerio = require("cheerio");

(async () => {
  const browser = await puppeteer.launch({
    headless: false // 크롬 브라우저 실행 옵션
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 1080
  });

  await page.goto("https://brunch.co.kr/search");
  await page.click("#txt_search");
  await page.keyboard.type("블랙미러");
  await page.keyboard.press("Enter");
  await page.waitForNavigation();

  let infiniteScrollInterval = setInterval(async () => {
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });
  }, 1000);

  setTimeout(async() => {
    clearInterval(infiniteScrollInterval);
    // await browser.close();
  }, 1000 * 10);
  // const html = await page.content();
  // const $ = cheerio.load(html);
  //
  // await page.screenshot({ path: "brunch.png" });
  // await browser.close();
})();