import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Counter from "./components/counter";
import TytulDynamiczny from "./components/TytulDynamiczny";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <Welcome name="Sara" phone="12345" />
		  <Counter />
          <TytulDynamiczny />

      </header>
    </div>
  );
}

export default App;
