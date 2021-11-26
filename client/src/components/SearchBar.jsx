import React, { useState } from "react";
import './SearchBar.css'
import { getCountries,setSearchInput } from "../actions";
import { connect } from "react-redux";

 function SearchBar({getCountries, setSearchInput}) {


  const  [input, setInput] = useState("");
  const handleInputChange = function(e) {
    setInput( e.target.value);
  }

  const reqCountries=  (e)=>{
        e.preventDefault()
        setSearchInput(input)
        getCountries(input)
        setInput('')

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
    getCountries: (name) => dispatch(getCountries(name)),
    setSearchInput: (input)=> dispatch(setSearchInput(input))
  };
}

  export default connect(null, mapDispatchToProps)(SearchBar);
