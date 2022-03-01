const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

let article = {};
const crawler = (pageNumber) => {
  axios
    .get(
      `https://api.brunch.co.kr/v1/search/article?q=%EB%B8%94%EB%9E%99%EB%AF%B8%EB%9F%AC&page=${pageNumber}&pageSize=20&highlighter=y&escape=y&sortBy=accu`
    )
    .then(response => {
      const data = response.data;
      // article[pageNumber] = data.data.list;
      article[pageNumber] = data.data.list.map((item) => {
        return {
          title: item.title,
          contentSummary: item.contentSummary,
          contentId: item.contentId,
          url: 'https://brunch.co.kr/@' + item.profileId + "/" + item.no
        }
      });
      const nextPageNumber = pageNumber + 1;
      if (nextPageNumber < 10) {
        crawler(nextPageNumber);
        return;
      }
      fs.writeFile("brunch_article.json", JSON.stringify(article), (err, data) => {
        if (err) {
          console.err(err);
          return;
        }
        console.log("success!");
      });
      // const $ = cheerio.load(response.data);
      // const href = $('a').attr('href');
      // console.log(href);
    });
};

crawler(1);



