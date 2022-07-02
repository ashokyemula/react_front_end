import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      {/* <h1> Let's Build Whatsapp Clone !! </h1> */}

      <div className="App-body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}
export default App;
