export const searchReddit = query => {
  return dispatch => {
    dispatch({type: 'START_SEARCH', query});
    return fetch(`http://www.reddit.com/r/all/search.json?limit=10&q=${query}`)
    .then(resp => resp.json())
    .then(posts => dispatch({type: 'SAVE_RESULTS', results: posts}));
  };
};

export const persistPost = post => {
  persistToDatabase(post);
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

//--- Below are not to be exported ---//

const persistToDatabase = (post) => {
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
  });
};
