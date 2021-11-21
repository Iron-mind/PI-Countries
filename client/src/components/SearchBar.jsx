import React, { useState } from "react";
import './SearchBar.css'
import { getCountries } from "../actions";
import { connect } from "react-redux";

 function SearchBar({getCountries}) {


  const  [input, setInput] = useState("");
  const handleInputChange = function(e) {
    setInput( e.target.value);  
  }

  const reqCountries=  (e)=>{
        e.preventDefault()
        console.log(input);
        getCountries(input)
        
  }
  return (
    <form className="input-wrapper" >
        
        <input className= "searc" onChange={handleInputChange} value={input}type="text" placeholder="Country"/>
        <input name='search' onClick={reqCountries}  type="submit" className="btn" value="Search" />
       
        
    </form>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getCountries: (name) => dispatch(getCountries(name))
  };
}
  
  export default connect(null, mapDispatchToProps)(SearchBar);