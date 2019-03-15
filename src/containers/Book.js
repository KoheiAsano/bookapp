import { connect } from 'react-redux';
import {fetchBookComments, fetchAllBooks} from '../actions';
import Book from '../components/Book';

const mapStateToProps = (state,ownProps) => {
  return {
    books: state.books,
    bookid: ownProps.match.params.id,
    bookComments: state.bookComments,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBookComments: (bookId) => dispatch(fetchBookComments(bookId)),
  fetchAllBooks: () => dispatch(fetchAllBooks())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
