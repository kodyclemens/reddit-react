export default function postsReducer(state = [], action) {
  switch(action.type) {
    case 'START_SEARCH':
      return {...state, query: action.query, loading: true};
    case 'SAVE_RESULTS':
      const postData = action.results.data.children;
      let posts = postData.map(post => post.data)
      posts = posts.filter(post => post.post_hint === 'image')
      return {...state, posts: posts, loading: false};
    default:
      return state;
  }
}
