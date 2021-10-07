import React from 'react';
import WeatherReader from "./features/weatherReader/weatherReader"
import RfRemote from "./features/rfRemote/rfRemote"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-gray-700 dark:text-gray-100 dark:bg-gray-800 h-screen">
        <div className="container max-w-screen-lg mx-auto p-4">
          <WeatherReader/>
          <RfRemote/>
        </div>
      </div>
    </div>
  );
}

export default App;
