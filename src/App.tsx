import React, {  } from 'react';

import { Dashboard } from './components/dashboard';

import './App.css';
import { TopPanel } from './components/top-panel';

function App() { 

  return (
    <div className="App">
      <TopPanel />
      <Dashboard />      
    </div>
  );
}

export default App;