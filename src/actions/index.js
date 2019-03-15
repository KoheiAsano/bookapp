




import {fireStore} from '../firebase';
import {firebaseAuth} from '../firebase';


export const loginAsAnnonymous = () => dispatch => {
  firebaseAuth().signInAnonymously().then(result => {
    console.log(result);
  })
}



const bookCollection = fireStore.collection("books");

const fetchOneBookSuccess = oneBook => {
  return {
    type: 'FETCH_ONE_BOOK',
    oneBook: oneBook
  }
}

export const fetchOneBook = bookId => dispatch => {
  bookCollection.doc(bookId).get().then(bookDoc=>{
    let oneBook = bookDoc.data();
    oneBook["id"] = bookDoc.id;
    dispatch(fetchOneBookSuccess(oneBook));
  })
}



// MARK: BookComments
const fetchBookCommentsSuccess = bookComments => {
  return {
    type: 'FETCH_BOOK_COMMENTS',
    bookComments: bookComments
  }
}

export const fetchBookComments = (bookId) => dispatch => {
  let bookComments=[];
  bookCollection.doc(bookId).collection("comments").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      let bookComment = doc.data();
      bookComment["id"] = doc.id;
      bookComments.push(bookComment);
    })
  })
  dispatch(fetchBookCommentsSuccess(bookComments));
}


// MARK: AllBooks
const fetchAllBooksSuccess = books => {
  return {
    type: 'FETCH_BOOKS',
    books: books
  }
}

// export const fetchSingleBooks = (bookId) => dispatch => {
//   bookCollection.onSnapshot((snapshot) => {
//     let books=[];//let books = []
//     bookCollection.onSnapshot((snapshot) => {
//       snapshot.docs.forEach((doc) => {
//         let book = doc.data();
//         book["id"] = doc.id;
//         books.push(book);
//       })
//     })
//     dispatch(fetchAllBooksSuccess(books));
//   })
// }



export const fetchAllBooks = () => dispatch => {
  bookCollection.onSnapshot((snapshot) => {
    let books=[];//let books = []
    bookCollection.onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        let book = doc.data();
        book["id"] = doc.id;
        books.push(book);
      })
    })
    dispatch(fetchAllBooksSuccess(books));
  })
}
