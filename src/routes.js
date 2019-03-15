import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from "./containers/Header";
import MyPage from "./containers/MyPage";
import All from "./containers/All";
import Book from "./containers/Book";
import Comment from "./components/Comment";

import { Provider } from 'react-redux'

class Routes extends Component {
  render(){
    return(
      <Provider store={this.props.store}>
        <BrowserRouter >
          <div>
            <Route path="/:cPath" component={ Header } />
            <Route exact path="/home" component={ MyPage } />
            <Route exact path="/all" component={ All } />
            <Route exact path="/book/:id" component={ Book } />
            <Route exact path="/book/:id/:commentid" component={ Comment } />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default Routes;
