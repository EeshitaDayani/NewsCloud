import getDate from '@/src/utils/getDate';
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NEXT_PUBLIC_NEWS_API);
const numArticles = 20;
const today = getDate('today');
const lastWeek = getDate('lastWeek');

export default async function handler(req, res) {
  try {
    const query = req.query;
    const { q, from } = query;

    const response = await newsapi.v2.everything({
      q: q || "",
      sources: "bbc-news,reuters,the-times-of-india,cnn,google-news",
      searchIn: "title,description",
      from: from || lastWeek,
      to: today,
      language: "en",
      sortBy: "popularity",
      pageSize: numArticles,
      page: 1
    });

    const data = response.articles.map((article, index) => ({
      title: article.title,
      url: article.url
    }));

    res.status(200).json({ data: data });
  
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

