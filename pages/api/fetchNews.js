import { createApiConfig } from '@/src/utils/apiConfig';
import NewsAPI from 'newsapi';

const newsapi = new NewsAPI('83780bc6c4234075bd7ed62bd2d1276c');

export default async function handler(req, res) {
  try {
    const apiConfig = createApiConfig(req.query);
    const response = await newsapi.v2.everything(apiConfig);

    const data = response.articles.map((article) => ({
      title: article.title,
      url: article.url
    }));

    res.status(200).json({ data: data });
  
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

