export default function postsReducer(state = [], action) {
  switch(action.type) {
    case 'START_SEARCH':
      return {query: action.query, loading: true};
    case 'SAVE_RESULTS':
      return {...state, loading: false};
    default:
      return state;
  }
}
