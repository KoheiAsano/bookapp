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
        <p><button onClick={() => alert('clicked')}> {this.props.bookName} <br/>[著者]<br/>[本の画像がここに表示される]</button></p>
      </div>
    );
  }
}

export default MyPage;
