import React, { Component } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Nav } from "./NavBar.styles";
// using contextType = ThemeContext
// class NavBar extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <Nav style={{ background: theme.ui, color: theme.syntax }}>
//         <h1>Context App</h1>
//         <ul>
//           <li style={{ background: theme.ui }}>Home</li>
//           <li style={{ background: theme.ui }}>About</li>
//           <li style={{ background: theme.ui }}>Contact</li>
//         </ul>
//       </Nav>
//     );
//   }
// }

class NavBar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <Nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li style={{ background: theme.ui }}>Home</li>
                <li style={{ background: theme.ui }}>About</li>
                <li style={{ background: theme.ui }}>Contact</li>
              </ul>
            </Nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default NavBar;
