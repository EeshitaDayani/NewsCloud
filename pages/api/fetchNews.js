const { NextApiRequest, NextApiResponse } = require('next');
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NEXT_PUBLIC_NEWS_API);
const numArticles = 20;

const todayDate = new Date();
const lastWeekDate = new Date();
lastWeekDate.setDate(todayDate.getDate() - 7);

// Import the configuration from the JSON file
const config = {
  "q": "war",
  "sources": "bbc-news,google-news",
  "searchIn": "title,description",
  "from": lastWeekDate.toISOString().slice(0, 10),
  "to": todayDate.toISOString().slice(0, 10),
  "language": "en",
  "sortBy": "popularity",
  "pageSize": numArticles,
  "page": 1
}

export default async function handler(req, res) {
  try {
    const response = await newsapi.v2.everything({
      q: config.q,
      sources: config.sources,
      from: config.from,
      to: config.to,
      language: config.language,
      sortBy: config.sortBy,
      pageSize: config.pageSize,
      page: config.page
    });

    const data = response.articles.map((article, index) => ({
      title: article.title
    }));

    res.status(200).json({ data: data });
  
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

