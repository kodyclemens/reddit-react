export default function postsReducer(state = [], action) {
  switch(action.type) {
    case 'START_SEARCH':
      return {...state, query: action.query, loading: true};

    case 'SAVE_RESULTS':
      const postData = action.results.data.children;
      let posts = postData.map(post => post.data).filter(post => post.post_hint === 'image')
      return {...state, posts: posts, loading: false};

    case 'PERSIST_POST':
      persistPost(action.post);
      return {...state, persisted: [action.post]}

    case 'SET_PERSISTED':
      return {...state, persisted: action.posts}

    default:
      return state;
  };
};

const persistPost = (post) => {
  fetch('/api/posts', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      post: {
        title: post.title,
        author: post.postAuthor,
        post_id: post.postID,
        image: post.postURL,
        post_permalink: post.postPermalink
      }
    })
  })
};
