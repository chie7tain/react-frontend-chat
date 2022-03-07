import React, { Component } from "react";
import { Button } from "./ThemeToggle.styles";
import { ThemeContext } from "../../contexts/ThemeContext";

class ThemeToggle extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { toggleTheme } = context;
          return <Button onClick={toggleTheme}>Toggle Theme</Button>;
        }}
      </ThemeContext.Consumer>
    );
  }
}
export default ThemeToggle;
