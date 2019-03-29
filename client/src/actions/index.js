export const searchReddit = query => {
  return dispatch => {
    dispatch({type: 'START_SEARCH', query});
    return fetch(`http://www.reddit.com/r/all/search.json?limit=10&q=${query}`)
    .then(resp => resp.json())
    .then(posts => dispatch({type: 'SAVE_RESULTS', results: posts}))
  };
};