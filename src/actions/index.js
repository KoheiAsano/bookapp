import {fireStore} from '../firebase';
import {firebaseAuth} from '../firebase';



const loginSuccess = (uid) => {
  return {
    type: 'LOGIN_ANNONYMOUS',
    uid: uid
  }
}


export const loginAsAnnonymous = () => dispatch => {
  firebaseAuth().signInAnonymously().then(result => {
    dispatch(loginSuccess(result.user.uid));
  })
}





// MARK: Books

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


const fetchAllBooksSuccess = books => {
  return {
    type: 'FETCH_BOOKS',
    books: books
  }
}



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



// MARK:


// MARK: BookComments

export const addComment = (bookId, who, content, to, page) => dispatch => {
  bookCollection.doc(bookId).collection("comments").update({
    by: who,
    content: content,
    to: to,
    page: page
  })
}


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



// MARK: user
const userCollection = fireStore.collection("users");



const fetchUserFavoritesSuccess = userFavorites => {
  return {
    type: 'FETCH_USER_FAVORITE_BOOK',
    userFavorites: userFavorites
  }
}

export const fetchUserFavorites = (uid) => dispatch => {
  let favorites=[];
  userCollection.doc(uid).collection("favorites").onSnapshot((snapshot) => {
    snapshot.docs.forEach((doc) => {
      let favorite = doc.data();
      favorite["id"] = doc.id();
      favorites.push(favorite);
    })
  })
  dispatch(fetchUserFavoritesSuccess(favorites));
}
