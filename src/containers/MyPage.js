import { connect } from 'react-redux';
import {fetchUserFavorites, fetchAllBooks} from '../actions';
import MyPage from '../components/MyPage';


const mapStateToProps = state => ({
  books: state.books,
  uid: state.auth,
  userFavorites: state.userFavorites
})

const mapDispatchToProps = dispatch => ({
  fetchUserFavorites: (uid) => dispatch(fetchUserFavorites(uid)),
  fetchAllBooks: () => dispatch(fetchAllBooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPage)
