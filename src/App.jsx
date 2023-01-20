
// import './App.css';
import React from "react";

import First_task from "./Components/First_task";

function App() {
  const a = '-'.repeat(100)
  return (
    <div className="App" style={{display: 'flex', flexDirection:'column', padding: '50px' }}>
      <First_task />
    </div>
  );
}

export default App;
