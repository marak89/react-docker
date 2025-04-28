import logo from './logo.svg';
import './App.css';
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <RegistrationForm />

      </header>
    </div>
  );
}

export default App;
