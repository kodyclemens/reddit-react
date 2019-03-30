export const searchReddit = query => {
  return dispatch => {
    dispatch({type: 'START_SEARCH', query});
    return fetch(`http://www.reddit.com/r/all/search.json?limit=10&q=${query}`)
    .then(resp => resp.json())
    .then(posts => dispatch({type: 'SAVE_RESULTS', results: posts}));
  };
};

export const persistPost = post => {
  return dispatch => {
    dispatch({type: 'PERSIST_POST', post: {
      postID: post.id,
      postURL: post.url,
      postAuthor: post.author,
      postTitle: post.title,
      postPermalink: post.permalink
    }
    });
  };
};

export const setPersisted = () => {
  return dispatch => {
    dispatch({type: 'SET_PERSISTED', posts: []});
    return fetch('/api/posts')
    .then(resp => resp.json())
    .then(posts => dispatch({type: 'SET_PERSISTED', posts: posts}));
  };
};