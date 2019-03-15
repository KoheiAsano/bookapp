import { connect } from 'react-redux';
import {fetchBookComments, fetchAllBooks, fetchOneBook} from '../actions';
import Book from '../components/Book';

const mapStateToProps = (state,ownProps) => {
  return {
    thisBook: state.onebook,
    bookid: ownProps.match.params.id,
    bookComments: state.bookComments,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBookComments: (bookId) => dispatch(fetchBookComments(bookId)),
  fetchAllBooks: () => dispatch(fetchAllBooks()),
  fetchOneBook: (bookId) => dispatch(fetchOneBook(bookId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
