const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const crawling = async (href) => {

}

(async () => {
  const browser = await puppeteer.launch({
    headless: false // 크롬 브라우저 실행 옵션
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1440,
    height: 1080
  })
  await page.goto('https://www.tistory.com/category/life');
  await page.waitForSelector("ul.list_tistory > li > a");
  const html = await page.content();
  const $ = cheerio.load(html);
  let hrefArray = [];

  $("ul.list_tistory > li > a").each((index, element) => {
    const href = $(element).attr('href');
    const title = $(element).find('.inner_desc_tit').text();
    hrefArray.push({
      href,
      title
    });
  });
  console.log(hrefArray);

  // await browser.close();
})(); // 즉시 실행 함수 IIFE