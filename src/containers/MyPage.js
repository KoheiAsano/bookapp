import { connect } from 'react-redux';
import {fetchUserFavorites} from '../actions';
import MyPage from '../components/MyPage';


const mapStateToProps = state => ({
  books: state.books,
  uid: state.auth,
  userFavorites: state.userFavorites
})

const mapDispatchToProps = dispatch => ({
  fetchUserFavorites: (uid) => dispatch(fetchUserFavorites(uid)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPage)
