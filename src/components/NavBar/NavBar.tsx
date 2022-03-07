import React, { Component, useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { Nav } from "./NavBar.styles";
import { Button } from "../ThemeToggle/ThemeToggle.styles";
// using contextType = ThemeContext
// class NavBar extends Component {
//   static contextType = ThemeContext;

//   render() {
//     console.log(this.context.theme);
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

// class NavBar extends Component {
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {(context) => {
//           const { isAuthenticated, toggleAuth } = context;
//           return (
//             <ThemeContext.Consumer>
//               {(context) => {
//                 const { isLightTheme, light, dark } = context;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                   <Nav style={{ background: theme.ui, color: theme.syntax }}>
//                     <h1>Context App</h1>
//                     <div>
//                       {isAuthenticated ? (
//                         <p>You are logged in</p>
//                       ) : (
//                         <p>You are not logged in</p>
//                       )}
//                     </div>
//                     <Button onClick={toggleAuth}>
//                       {isAuthenticated ? "Log out" : "Login"}
//                     </Button>
//                     <ul>
//                       <li style={{ background: theme.ui }}>Home</li>
//                       <li style={{ background: theme.ui }}>About</li>
//                       <li style={{ background: theme.ui }}>Contact</li>
//                     </ul>
//                   </Nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
    <Nav style={{ background: theme.ui, color: theme.syntax }}>
      <h1>Context App</h1>
      <div>
        {isAuthenticated ? (
          <p>You are logged in</p>
        ) : (
          <p>You are not logged in</p>
        )}
      </div>
      <Button onClick={toggleAuth}>
        {isAuthenticated ? "Log out" : "Login"}
      </Button>
      <ul>
        <li style={{ background: theme.ui }}>Home</li>
        <li style={{ background: theme.ui }}>About</li>
        <li style={{ background: theme.ui }}>Contact</li>
      </ul>
    </Nav>
  );
};
export default NavBar;
