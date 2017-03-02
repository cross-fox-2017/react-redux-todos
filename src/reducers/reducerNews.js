const data = [{
    title: 'React JS',
    url: 'https://facebook.github.io/react',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
}, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov',
    num_comments: 2,
    points: 5,
    objectID: 1
}]

export const newsListsReducer = () => {
    return data
}

export const searchKeywordReducer = (state = data, action) => {
    switch (action.type) {
        case 'SEARCH_NEWS':
            var searchNewsLists = action.payload.news.filter((data) => {
                return data.title.toLowerCase().match(`${action.payload.text}`.toLowerCase())
            })
            return searchNewsLists
            break
        default:
            return state
    }
}
