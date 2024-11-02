import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Counter';

function App() {
  return (
    <div style={{minHeight: "100hv", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "darkblue"}}>
      <Counter />
    </div>
  );
}

export default App;
