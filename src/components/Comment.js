import React, { Component } from 'react';
import CommentModal from './CommentModal';
class Comment extends Component {
  constructor(props){
    super(props)
    this.state={
      Comment:false,
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  className="App-logo" alt="logo" />
            <p>
              Comment
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </header>
        <button onClick={() => this.setState({Comment:true})}>Comment</button>
        <CommentModal CommentModalOpen={this.state.Comment} onCommentModalClose={() => this.setState({Comment: false})}/>
      </div>
    );
  }
}

export default Comment;
