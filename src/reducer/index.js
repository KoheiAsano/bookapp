import { combineReducers } from 'redux';
import books from './books';
import bookComments from './bookComments'
export default combineReducers({
  books,
  bookComments
})
