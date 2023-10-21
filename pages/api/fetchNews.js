const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NEXT_PUBLIC_NEWS_API);
const numArticles = 20;

const todayDate = new Date();
const lastWeekDate = new Date();
lastWeekDate.setDate(todayDate.getDate() - 7);

const todayDateStr = todayDate.toISOString().slice(0, 10);
const lastWeekDateStr = lastWeekDate.toISOString().slice(0, 10);


export default async function handler(req, res) {
  try {
    const query = req.query;
    const { q } = query;

    console.log("q value: ", q);

    const response = await newsapi.v2.everything({
      q: q || "red",
      sources: "bbc-news,google-news",
      searchIn: "title,description",
      from: lastWeekDateStr,
      to: todayDateStr,
      language: "en",
      sortBy: "popularity",
      pageSize: numArticles,
      page: 1
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

