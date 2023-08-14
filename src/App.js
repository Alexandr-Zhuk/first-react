import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [someText, setSomeText] = useState(false);

  const changeText = (ev) => {
    setSomeText(!someText);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {someText ? (<>Клік! </>) : (<>Не клік! </>)}
          Learn React
        </a>
        <div onClick={changeText}>Клікни</div>
      </header>
    </div>
  );
}

export default App;
