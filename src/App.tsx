import React from 'react';
import CurrentTempDisplay from "./components/CurrentTempDisplay/CurrentTempDisplay"
import RfRemote from "./components/RfRemote/RfRemote"
import './App.css';

function App() {
  return (
    <div className="App">
      <CurrentTempDisplay/>
      <RfRemote/>
    </div>
  );
}

export default App;
