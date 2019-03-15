import { connect } from 'react-redux';
import {fetchBookComments, fetchAllBooks, fetchOneBook, addComment} from '../actions';
import Book from '../components/Book';

const mapStateToProps = (state,ownProps) => {
  return {
    thisBook: state.onebook,
    bookid: ownProps.match.params.id,
    bookComments: state.bookComments,
    uid: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBookComments: (bookId) => dispatch(fetchBookComments(bookId)),
  fetchAllBooks: () => dispatch(fetchAllBooks()),
  fetchOneBook: (bookId) => dispatch(fetchOneBook(bookId)),
  addComment: (bookId, who, content, to, page) => dispatch(addComment(bookId, who, content, to, page))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book)
