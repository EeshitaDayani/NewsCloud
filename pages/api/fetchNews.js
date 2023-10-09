const fs = require('fs');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('83780bc6c4234075bd7ed62bd2d1276c');
const numArticles = 25;

// Import the configuration from the JSON file
const config = {
  "q": "usa",
  "sources": "bbc-news",
  "searchIn": "title,description",
  "from": new Date(new Date().setDate(today.getDate() - 30)).toISOString().slice(0, 10),
  "to": new Date().toISOString().slice(0, 10),
  "language": "en",
  "sortBy": "popularity",
  "pageSize": 15,
  "page": 1
}

newsapi.v2.everything({
  q: config.q,
  sources: config.sources,
  from: config.from,
  to: config.to,
  language: config.language,
  sortBy: config.sortBy,
  pageSize: config.pageSize,
  page: config.page
}).then(response => {
  // Write the response to output.json
  const anyChartData = response.articles.map((article, index) => ({
    x: article.title,
    custom_field: article.description,
    value: (numArticles - index) * numArticles  // Assuming a pattern where the first article has a value of 15, second has 0, and so on
  }));

  fs.writeFile('output.json', JSON.stringify(anyChartData), err => {
    if (err) throw err;
    console.log('Response has been saved to output.json');
   });
});
