import React, { Component } from 'react';

class Book extends Component {
  componentDidMount(){
    const bookId = this.props.match.params.id;
    console.log(bookId)
    this.props.fetchAllBooks();
    this.props.fetchBookComments(bookId);
    this.props.fetchOneBook(bookId)
  }
  componentDidUpdate(prevProps){
    if(this.props.bookComments !== prevProps.bookComments){
      this.setState({test:true});
    }
  }
  render() {
    if(this.props.thisBook){
      return (
        <div className="App">
          <p onClick={() => console.log(this.props.thisBook)}>{this.props.thisBook.title}</p>
          {this.props.bookComments.map( (comment,i) =>
             <button >{comment.content}</button>
          )}
        </div>
      );
    }else{return <button onClick={() => console.log(this.props.thisBook)}>ASAKO</button>;}

  }
}

export default Book;
