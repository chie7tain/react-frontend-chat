import React, { Component } from "react";
import { Nav } from "./NavBar.styles";
class NavBar extends Component {
  render() {
    return (
      <Nav>
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
