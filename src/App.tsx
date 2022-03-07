import { useState, useEffect } from "react";
import Chat from "./components/Chat/Chat";
// components
import Sidebar from "./components/Sidebar/Sidebar";
import { GlobalStyle } from "./GlobalStyles.styles";

// styles
import { Wrapper } from "./App.styles";
import SongList from "./components/SongList/SongList";
// import NavBar from "./components/NavBar/NavBar";
// import BookList from "./components/BookList/BookList";
// import ThemeContextProvider from "./contexts/ThemeContext";
// import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
// import AuthContextProvider from "./contexts/AuthContext";
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      {/* <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider> */}
      {/* <Sidebar />
      <Chat /> */}

      {/* using functional components to learn context api */}
      <SongList />
    </Wrapper>
  );
}

export default App;
