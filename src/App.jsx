
// import './App.css';
import React from "react";

import Users from "./Components/Users";

function App() {
  const a = '-'.repeat(100)
  return (
    <div className="App" style={{display: 'flex', flexDirection:'column', padding: '50px' }}>
      <Users />
    </div>
  );
}

export default App;
