import React, { Component } from "react";
import { Div } from "./BookList.styles";
import { ThemeContext } from "../../contexts/ThemeContext";
class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <Div style={{ background: theme.bg, color: theme.syntax }}>
        <h1>Book List</h1>
        <ul>
          <li style={{ background: theme.ui }}>The Alchemist</li>
          <li style={{ background: theme.ui }}>The Alchemist</li>
          <li style={{ background: theme.ui }}>The Alchemist</li>
        </ul>
      </Div>
    );
  }
}
export default BookList;
