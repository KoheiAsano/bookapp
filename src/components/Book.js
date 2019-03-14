import React, { Component } from 'react';

class Book extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img  className="App-logo" alt="logo" />
          <p>
            Book
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
      </div>
    );
  }
}

export default Book;
