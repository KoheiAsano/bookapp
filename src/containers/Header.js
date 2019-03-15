import { connect } from 'react-redux';
import {loginAsAnnonymous} from '../actions';
import Header from '../components/Header';

const mapStateToProps = state => ({
  bookComments: state.bookComments
})

const mapDispatchToProps = dispatch => ({
  loginAsAnnonymous: () => dispatch(loginAsAnnonymous())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
