export default function postsReducer(state = [], action) {
  switch(action.type) {
    case 'START_SEARCH':
      return {...state, query: action.query, loading: true};

    case 'SAVE_RESULTS':
      const postData = action.results.data.children;
      let posts = postData.map(post => post.data).filter(post => post.post_hint === 'image')
      return {...state, posts: posts, loading: false};

    case 'PERSIST_POST':
      return {...state, persisted: [action.post]}

    case 'SET_PERSISTED':
      for(let x in action.posts) {
        action.posts[x].persisted = true;
      }
      return {...state, persisted: action.posts}

    case 'CHEER_POST':
      let persistedPosts = state.persisted;
      const index = state.persisted.map(function(x) {return x.id;}).indexOf(action.post.id)

      let post = action.post
      if (action.post.type === 'cheer-up') {
        post.cheers += 1;
      } else {
        post.cheers += -1;
      }
      post.total_votes += 1
      persistedPosts[index] = post;

      return {...state, persisted: persistedPosts}

    default:
      return state;
  };
};


