import React, {useState} from 'react';
import './App.css';
import Main from './components/Main.jsx';

function App() {
  const [state, setState] = useState([]);
  return (
    <div className="App">
      Hello World from App.js!

      <Main state={state} setState={setState}/>

    </div>
  );
}

export default App;
