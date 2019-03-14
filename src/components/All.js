import React, { Component } from 'react';

const books = ["chikara", "asako","asako" ];

class All extends Component {
  render() {
    return (
      <div>
        {books.map((book,i) => {
          return (
            <button onClick={() => console.log("Clicked" + book)}> {book} </button>
          )
        })}
      </div>
    );
  }
}

export default All;
