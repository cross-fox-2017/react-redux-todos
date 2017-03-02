export const searchNews = (text, news) => {
  return {
    type: 'SEARCH_NEWS',
    payload: {
      text: text,
      news: news
    }
  }
}
