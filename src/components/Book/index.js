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
      const sorted_comments = this.props.bookComments.sort(
         (key1, key2) => {
           if (key1.page > key2.page) { return 1 }
           else if (key1.page < key2.page) { return -1 }
           else { return 0 }
         }
       )
      return (
        <div className="App">
          <center>
            <p onClick={() => console.log(this.props.thisBook)}><font size="10" color="#ff0000">{this.props.thisBook.title}</font></p>
            <p onClick={() => console.log(this.props.thisBook)}>全部で{this.props.thisBook.page_amount}ページあります</p>
            <p onClick={() => console.log(this.props.thisBook)}><img src={this.props.thisBook.img} alt={"本の画像がここに表示されます"} title={"本"} width="200"/></p>
            <hr/>
            {sorted_comments.map( (comment,i) => {
              if (comment.to==null){
                return(
                  <p>
                   <button style={{width: "50%"}} >
                     <p><font size="4">by {comment.by}</font></p>
                     <p><font size="4">to {comment.page} ページ</font></p>
                     <p>{comment.content}</p>

                   </button>
                  </p>
                )
              }
              else{
                return(null)
              }
            }
            )}
          </center>
        </div>
      );
    }else{return <button onClick={() => console.log(this.props.thisBook)}>ASAKO</button>;}

  }
}

export default Book;
