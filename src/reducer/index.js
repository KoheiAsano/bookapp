import { combineReducers } from 'redux';
import auth from './auth';
import books from './books';
import bookComments from './bookComments'
import onebook from './onebook';

export default combineReducers({
  auth,
  books,
  bookComments,
  onebook,
})
