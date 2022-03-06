import { useState, useEffect } from "react";
import Chat from "./components/Chat/Chat";
// components
import Sidebar from "./components/Sidebar/Sidebar";
import { GlobalStyle } from "./GlobalStyles.styles";

// styles
import { Wrapper } from "./App.styles";
import NavBar from "./components/NavBar/NavBar";
import BookList from "./components/BookList/BookList";
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <NavBar />
      <BookList />
      {/* <Sidebar />
      <Chat /> */}
    </Wrapper>
  );
}

export default App;
