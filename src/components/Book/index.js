import React, { Component } from 'react';

class Book extends Component {
  componentDidMount(){
    const bookId = this.props.match.params.id;
    this.props.fetchAllBooks();
    this.props.fetchBookComments(bookId);
  }
  componentDidUpdate(prevProps){
    if(this.props.bookComments !== prevProps.bookComments){
      this.setState({test:true});
    }
  }
  render() {
    if(this.props.bookComments[0]){
      const bookComments = this.props.bookComments
      return (
        <div className="App">
          <button onClick={() => console.log(bookComments[0].content)}>{bookComments[0].content}</button>
        </div>
      );
    }else{return <button onClick={() => {
      this.setState({test:true})
    }}>TEST</button>;}

  }
}

export default Book;
