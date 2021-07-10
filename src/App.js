import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Infos from "./components/infos/infos";

function App() {
  return (
    <div className="App">
      <Main></Main>
      <Infos></Infos>
    </div>
  );
}

export default App;
