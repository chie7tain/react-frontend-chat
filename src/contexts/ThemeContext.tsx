import React, { Component, createContext, useReducer } from "react";

interface ThemeContextProps {
  isLightTheme: boolean;
  light: { syntax: string; ui: string; bg: string };
  dark: { syntax: string; ui: string; bg: string };
  toggleTheme: () => void;
}
export const ThemeContext = createContext({} as ThemeContextProps);
class ThemeContextProvider extends Component {
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
export default ThemeContextProvider;
