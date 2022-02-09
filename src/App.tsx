import "./App.css";
import Chat from "./components/Chat/Chat";
// components
import { Sidebar } from "./components/Sidebar/Sidebar";
function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
    </div>
  );
}

export default App;
