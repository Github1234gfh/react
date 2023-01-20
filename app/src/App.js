
// import './App.css';
import React from "react";
import Fiveth_task from "./Components/Fiveth_task";

import First_task from "./Components/First_task";
import Fourth_task from "./Components/Fourth_task";
import Second_task from "./Components/Second_task";
import Third_task from "./Components/Third_task";

function App() {
  const a = '-'.repeat(100)
  return (
    <div className="App" style={{display: 'flex', flexDirection:'column', padding: '50px' }}>
      <First_task />
    </div>
  );
}

export default App;
