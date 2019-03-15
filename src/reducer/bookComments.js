const bookComments = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOK_COMMENTS':
      return action.bookComments
    default:
      return state
  }
}

export default bookComments
