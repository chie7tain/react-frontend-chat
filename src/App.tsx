import Chat from "./components/Chat/Chat";
// components
import { Sidebar } from "./components/Sidebar/Sidebar";
import { GlobalStyle } from "./GlobalStyles.styles";

// styles
import { Wrapper } from "./App.styles";
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Sidebar />
      <Chat />
    </Wrapper>
  );
}

export default App;
