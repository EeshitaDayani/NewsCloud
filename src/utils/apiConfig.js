import getDate from '@/src/utils/getDate';
import { HEADLINE_COUNT } from './constants';

const today = getDate('today');
const lastWeek = getDate('lastWeek');

const defaultParams = {
  q: "", 
  from: lastWeek,
  language: "en",
  page: 1,
  pageSize: HEADLINE_COUNT,
  searchIn: "title,description",
  sortBy: "popularity",
  sources: "bbc-news,reuters,the-times-of-india,google-news",
  to: today
};

export const createApiConfig = (additionalParams) => {
  return {
    ...defaultParams,
    ...additionalParams
  };
};