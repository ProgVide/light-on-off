import React, { useState } from "react";
import "./Light.css";

function App() {
  let [islit, setLit] = useState(true);
  let [istemp, setTemp] = useState(72);
  return (
    <div className={`room ${islit ? "lit" : "dark"}`}>
      <button onClick={() => setLit(true)}>On</button>
      <br />
      <button onClick={() => setLit(false)}>Off</button>
      <br />
      Light Status: {islit ? "On" : "Off"}
      <br />
      <br />
      Current Temperature: {istemp}
      <br />
      <button onClick={() => setTemp(++istemp)}>+</button>
      <br />
      <button onClick={() => setTemp(--istemp)}>-</button>
    </div>
  );
}

export default App;
