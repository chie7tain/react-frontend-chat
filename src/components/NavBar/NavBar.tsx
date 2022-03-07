import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Nav } from "./NavBar.styles";
class NavBar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <Nav style={{ background: theme.bg, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </Nav>
    );
  }
}
export default NavBar;
