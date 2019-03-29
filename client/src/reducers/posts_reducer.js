export default function postsReducer(state = [], action) {
  switch(action.type) {
    case 'START_SEARCH':
      return {...state, query: action.query, loading: true};
    case 'SAVE_RESULTS':
      const postData = action.results.data.children;
      const posts = postData.map(post => post.data)
      return {...state, posts: posts, loading: false};
    default:
      return state;
  }
}
