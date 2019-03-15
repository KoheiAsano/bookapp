import { connect } from 'react-redux';
import {fetchAllBooks} from '../actions';
import All from '../components/All';


const mapStateToProps = state => ({
  books: state.books
})

const mapDispatchToProps = dispatch => ({
  fetchAllBooks: () => dispatch(fetchAllBooks()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All)
