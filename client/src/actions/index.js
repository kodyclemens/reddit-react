export const searchReddit = (query, amount) => {
  return dispatch => {
    dispatch({type: 'START_SEARCH', query});
    return fetch(`https://www.reddit.com/r/all/search.json?limit=${amount}&q=${query}&sr_detail=on&t=all&sort=hot`)
    .then(resp => resp.json())
    .then(posts => dispatch({type: 'SAVE_RESULTS', results: posts}))
    .catch(error => console.log(error));
  };
};

export const persistPost = post => {
  persistToDatabase(post);
  return dispatch => {
    dispatch({type: 'PERSIST_POST', post: {
      ID: post.id,
      URL: post.url,
      author: post.author,
      title: post.title,
      permalink: post.permalink
    }
    });
  };
};

export const setPersisted = (filter = 'recently-pinned') => {
  return dispatch => {
    dispatch({type: 'SET_PERSISTED', posts: []});
    return fetch(`/api/posts/${filter}`)
    .then(resp => resp.json())
    .then(posts => dispatch({type: 'SET_PERSISTED', posts: posts}))
    .catch(error => console.log(error));
  };
};

export const cheerPost = (post, type) => {
  const cheerType = type;
  persistCheer(post, type);
  return dispatch => {
    dispatch({type: 'CHEER_POST', post: {
      ...post,
      type: cheerType
    }})
  }
}

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
        author: post.author,
        post_id: post.id,
        image: post.url,
        permalink: post.permalink
      }
    })
  })
  .catch(error => console.log(error));
};

const persistCheer = (post, type) => {
  let value = 0;

  type === 'cheer-up' ? value = 1 : value = -1;

  fetch('/api/posts/' + post.id, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      post: {
        id: post.id,
        cheer_value: value
      }
    })
  })
  .catch(error => console.log(error));
};