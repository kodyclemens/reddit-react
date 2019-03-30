export default function postsReducer(state = [], action) {
  switch(action.type) {
    case 'START_SEARCH':
      return {...state, query: action.query, loading: true};

    case 'SAVE_RESULTS':
      const postData = action.results.data.children;
      let posts = postData.map(post => post.data)
      posts = posts.filter(post => post.post_hint === 'image')
      return {...state, posts: posts, loading: false};

    case 'PERSIST_POST':
      // TODO: Persist post to DB
      return fetch('/api/posts', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          post: {
            title: action.post.title,
            author: action.post.postAuthor,
            post_id: action.post.postID,
            image: action.post.postURL,
            post_permalink: action.post.postPermalink
          }
        }) 
      })

    default:
      return state;
  }
}
