import React from "react";

export default function Options() {
  return (
    <div className='left-bar'>
      <section>
        <label htmlFor="alp">Order by Alphabetic</label>
        <select name="alp" >
          <option selected disabled >Select</option>

          <option  value="asc">A to Z</option>
          <option value="desc">Z to A</option>
          
        </select>
      </section>
      <section>
        
        <label htmlFor="pop">Order by Population</label>
        <select name="pop" >
          <option selected disabled >Select</option>

          <option  value="Pasc">Population asc</option>
          <option value="Pdesc">Population desc</option>
          
        </select>
      </section>
      <section>
        
        <label htmlFor="act">Order by Activity</label>
        <select name="act" >
          <option selected disabled >Select </option>
          <option  value="summer">Summer </option>
          <option value="spring">Spring</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
          
        </select>
        

      </section>
      <section>
        
        <label htmlFor="cont">Order by Continent </label>
        <select name="cont" >
          <option selected disabled >Select</option>
          <option  value="Africa">Africa </option>
          <option value="Europe">Europe</option>
          <option value="North America">North America</option>
          <option value="South America">South America</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="Antarctica">Antarctica</option>
          
        </select>
       
      </section>
      <button className="reset">Reset</button>
    </div>
  );
}
