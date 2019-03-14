import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import MyPage from "./components/MyPage";
import All from "./components/All";
import Book from "./components/Book";
import Comment from "./components/Comment";

class Routes extends Component {
  render(){
    return(
      <BrowserRouter >
        <div>
          <Route exact path="/" component={ MyPage } />
          <Route exact path="/all" component={ All } />
          <Route exact path="/book/:id" component={ Book } />
          <Route exact path="/book/:id/:commentid" component={ Comment } />
        </div>
      </BrowserRouter>
  )
  }
}

export default Routes;
