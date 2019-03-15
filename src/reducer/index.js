import { combineReducers } from 'redux';
import auth from './auth';
import books from './books';
import bookComments from './bookComments'
import onebook from './onebook';
import userFavorites from './userFavorites';

export default combineReducers({
  auth,
  books,
  bookComments,
  onebook,
  userFavorites,
})
