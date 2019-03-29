export default function postsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_QUERY':
      // Gather posts from API and save to store
      return {query: action.query};
    default:
      return state;
  }
}
