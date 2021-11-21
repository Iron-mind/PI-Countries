import React,  { useEffect } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getCountries } from "../actions";

function Cards({ countries, getCountries }) {
  //all countries when component did mount
 useEffect(async ()=>{ 
  await getCountries('');
 },[])

  return (
    <>
      {countries?.map((c) => {
        return (
        <Card 
          name={c.name} 
          continent={c.continent} 
          flagImage= {c.flagImage}  
          ANID= {c.ID}  //Abbreviated name ID
          id = {c.id}
        />)
          
      })}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    country: state.countryDetail,
    countries: state.countries,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getCountries: (name) => dispatch(getCountries(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
