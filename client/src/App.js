import "./App.css";
import React from "react";

import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Home from "./components/Home"
import Country from "./components/Country";
import AddActivity from "./components/AddActivity";
function App() {
  return (
    <div className="App">
       
        <Routes >
        
        <Route path='/add-activity' element={<AddActivity/>}/>
        <Route path='/country/:ID' element={<Country/>}/>
          <Route  exact path="/" element={<Landing/>} />
          <Route  path="/home" element={<Home/>} />
          
         
         

        </Routes>
      
    </div>
  );
}

export default App;
