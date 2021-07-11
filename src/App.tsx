import React from 'react';
import CurrentTempDisplay from "./components/CurrentTempDisplay/CurrentTempDisplay"
import RfRemote from "./components/RfRemote/RfRemote"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-gray-700 dark:text-gray-100 dark:bg-gray-800 h-screen">
        <div className="container max-w-screen-lg mx-auto p-4">
          <CurrentTempDisplay/>
          <RfRemote/>
        </div>
      </div>
    </div>
  );
}

export default App;
