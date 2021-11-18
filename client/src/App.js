import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Home from "./components/Home"
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route  exact path="/" element={<Landing/>} />
          <Route  path="/home" element={<Home/>} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
