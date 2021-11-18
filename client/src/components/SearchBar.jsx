import React, { useState } from "react";
import './SearchBar.css'
export default function SearchBar({onSearch}) {
  const  [input, setInput] = useState("");
  

  return (
    <form className="input-wrapper" >
        
        <input className= "searc" type="text" placeholder="Country"/>
        <input type="submit" className="btn" value="Search" />
       
        
    </form>
  );
}