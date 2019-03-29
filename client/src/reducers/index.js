import postsReducer  from './posts_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;