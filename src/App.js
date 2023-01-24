import "./App.css";
import CountDown from "./components/count/count";
import NavBar from "./components/navBar/navbar";

function App() {
  return (
    <div className="main">
      <NavBar />
      <CountDown />
    </div>
  );
}

export default App;
