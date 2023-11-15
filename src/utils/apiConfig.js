import getDate from '@/src/utils/getDate';

const today = getDate('today');
const lastWeek = getDate('lastWeek');

const defaultParams = {
  language: "en",
  page: 1,
  pageSize: 20,
  searchIn: "title,description",
  sortBy: "popularity",
  sources: "bbc-news,reuters,the-times-of-india,google-news",
  to: today
};

export const createApiConfig = (additionalParams = {}) => {
  return {
    ...additionalParams,
    ...defaultParams
  };
};