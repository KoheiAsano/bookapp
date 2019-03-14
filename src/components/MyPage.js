import React, { Component } from 'react';

const books = ["ゼロから作るDeep_Lerning", "PRML","やさしいJAVA", "アナログ電子回路の基礎", "Linux_Bible" ];

class MyPage extends Component {
  render() {
    return (
      <div>
        <div><MyPageTitle /></div>
        {books.map((book,i) => {
          return (
            //<p><button onClick={() => console.log("Clicked" + book)}> {book} </button></p>
            <p><BookLink bookName={book}/></p>
          )
        })}
        <div>message = {'ふがふが'}</div>
      </div>
    );
  }
}

class MyPageTitle extends Component {
  render() {
    return (
      <div>
        <p>マイページ</p>
      </div>
    );
  }
}
class BookLink extends Component {
  render() {
    return (
      <div>
        <p><button onClick={() => console.log("Clicked" + this.props.bookName)}> {this.props.bookName} </button></p>
      </div>
    );
  }
}

export default MyPage;
