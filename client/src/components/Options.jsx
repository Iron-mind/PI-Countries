import React, { useState,useEffect } from "react";
import { getCountries, getCountriesInOrder,filterByContinent, setSearchInput } from "../actions";
import { connect } from "react-redux";

 function Options({countries,getCountriesInOrder, getCountries, searchInput,filterByContinent,setSearchInput}) {
   
   useEffect(()=>{
          setSearchInput('')
   },[])
  //TODO: pass these states to the 'store' to create reset options
  //TODO: create options reset functionality
  const [continent, setContinent] = useState('none')
  const [orderByPopulation, setOrderByPopulation] = useState('none')
  const [orderByAlphabetic, setOrderByAlphabetic] = useState('asc')




  //Here is the spaghetti code. Calm down, someday I will improve it
  let handlerSelectOrder=(e)=>{
    //if(e.target.name==="alp"){
      setOrderByAlphabetic(e.target.value)
      if (e.target.value==='desc') {
        //when the order changes, then the filtering and population order are canceled
        setContinent('none')
        setOrderByPopulation('none')


        return getCountriesInOrder(searchInput)
      }
        //when the order changes, then the filtering and population order are canceled
      setOrderByPopulation('none')
      setContinent('none')


      getCountries(searchInput)

  //  }else if (e.target.name==="pop")
  }

  let handlerSelectOrderP = (e)=>{
    setOrderByPopulation(e.target.value)

      if (e.target.value==='Pasc') {
        //when the order changes, then the filtering and alphabetic order are canceled
       setContinent('none')
       setOrderByAlphabetic('none') // none is 'select' disabled


         // second parameter boolean if request population in order asc
        return getCountries(searchInput,true)
      }
      if (e.target.value==='none') {
        setOrderByAlphabetic('asc')

         return getCountries(searchInput)

      }
      setContinent('none')
      setOrderByAlphabetic('none')

      // second parameter boolean if request population in order asc then is reverted
      getCountriesInOrder(searchInput,true)


  }



  let handlerOfFiltered = function (e) {
    if(e.target.value!== 'none'){
      setContinent(e.target.value)

      return filterByContinent(e.target.value)

    }
    setContinent('none')
    filterByContinent('none')

  }

  function handleOnClick() {
      getCountries('')
      setContinent('none')
      setOrderByPopulation('none')
      setOrderByAlphabetic('asc')
      setSearchInput('')
  }
  return (
    <div className='left-bar'>
      <section>
        <label htmlFor="alp">Order by Alphabetic </label>
        <select value={orderByAlphabetic} onChange={handlerSelectOrder} name="alp" >
          <option  disabled value='none' >Select</option>

          <option  value="asc">A to Z</option>
          <option value="desc">Z to A</option>

        </select>
      </section>
      <section>

        <label htmlFor="pop">Order by Population </label>
        <select value={orderByPopulation} name="pop" onChange={handlerSelectOrderP}>
          <option  value='none' >None</option>

          <option  value="Pasc">Population asc</option>
          <option value="Pdesc">Population desc</option>

        </select>
      </section>

      <section>

        <label htmlFor="cont">Filtered by Continent </label>
        <select value={continent} onChange={handlerOfFiltered} name="cont" >
        <option  value="none" >None</option>
          <option  value="Africa">Africa </option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="Antarctica">Antarctica</option>

        </select>

      </section>
      <button className="reset" onClick={handleOnClick}>Reset</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    countries: state.countries,
    searchInput: state.searchInput
    
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getCountries: (name,populationOrder) => dispatch(getCountries(name,populationOrder)),
    getCountriesInOrder: (name, populationOrder)=> dispatch(getCountriesInOrder(name,populationOrder)),
    filterByContinent: (cont)=> dispatch(filterByContinent(cont)),
    setSearchInput:(input)=> dispatch(setSearchInput(input))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Options);
