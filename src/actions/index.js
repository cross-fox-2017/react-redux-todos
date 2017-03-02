export const searchNews = (text, news) => {
  return {
    type: 'SEARCH_NEWS',
    payload: {
      text: text,
      news: news
    }
  }
}

export const listtodos = todos => ({
  type: 'LIST_TODOS',
  payload: todos
})

export const GetAll = () => {
  return (dispatch) => {
    setTimeout(()=>{
      fetch('http://localhost:8080/todos')
        .then(res => res.json())
        .then(datatodos => dispatch(listtodos(datatodos)))
    },1000)
  }
}
