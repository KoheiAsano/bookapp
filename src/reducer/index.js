import { combineReducers } from 'redux';
import books from './books';
import bookComments from './bookComments'
import onebook from './onebook';
export default combineReducers({
  books,
  bookComments,
  onebook,
})
