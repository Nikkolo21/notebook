import { combineReducers } from 'redux';
import book from './reducers/book';

const rootReducer = () =>
  combineReducers({
    book,
  });

export { rootReducer };
