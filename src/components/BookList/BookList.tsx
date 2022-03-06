import React, { Component } from "react";
import { Div } from "./BookList.styles";
class BookList extends Component {
  render() {
    return (
      <Div>
        <h1>Book List</h1>
        <ul>
          <li>The Alchemist</li>
          <li>The Alchemist</li>
          <li>The Alchemist</li>
        </ul>
      </Div>
    );
  }
}
export default BookList;
