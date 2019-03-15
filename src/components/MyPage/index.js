import React, { Component } from 'react';

const books = ["ゼロから作るDeep_Lerning", "PRML","やさしいJAVA", "アナログ電子回路の基礎", "Linux_Bible" ];



class MyPage extends Component {
  // componentDidMount() {
  //
  // }
  componentDidUpdate(prevProps) {
    if(this.props.uid !== prevProps.uid){
      this.props.fetchUserFavorites(this.props.uid);
    }
  }
  render() {
    return (
      <div>
        <center>
          <div><MyPageTitle /></div>
          <hr />
          {books.map((book,i) => {
            return (
              <BookLink bookName={book}/>
            )
          })}
          <div>message = {'ふがふが'}</div>
          <button onClick={() => console.log(this.props)}>ASAKO</button>
        </center>
      </div>
    );
  }
}

class MyPageTitle extends Component {
  render() {
    return (
      <div>
        <p><font size="10" color="#ff0000">マイページ</font></p>
      </div>
    );
  }
}
class BookLink extends Component {
  render() {
    return (
      <div>
        <p><button onClick={() => alert('clicked')}> {this.props.bookName} <br/>[著者]<br/><img src={"https://imgur.com/HHNnB5H.png"} alt={"本の画像がここに表示されます"} title={"本"} width="200"/></button></p>
      </div>
    );
  }
}

export default MyPage;
