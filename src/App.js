// this file the element of all project here
import "./App.css";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* elements */}
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
