import React, {useState,useEffect} from "react";
import { connect } from "react-redux";
import {addActivity, getCountries} from '../actions'

export function AddActivity({ getCountries,temporaryCountries,countryDetail, addActivity }) {
  const [input, setInput] = useState({
    name: "",
    difficulty: "1",
    duration: "",
    season: "summer",
    country: "select"
  });

 useEffect(() => {
    getCountries('')
 },[])

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input);
  };
  function handleSubmit(e) {
    e.preventDefault();
    addActivity(input)

    setInput({
      name: "",
      difficulty: "1",
      duration: "",
      season: 'summer',
      country: 'select'

    });
    //alert("ToDo Agregado, miralo en dando clic en ToDos")
  }

  return (
      <>
      <h1>Add Activity</h1>
      <form

        className="form"
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      >
      <div className='card'>

        <div>
          <label>Title </label>
          <input
            placeholder={`'Ski', 'Hill climbing', etc. `}
            type="text"
            onChange={handleInputChange}
            name="name"
            value={input.name}
          />
        </div>

        <div>
          <label>Duration </label>
          <input
          placeholder={`1h or 30min`}
            type="text"
            onChange={handleInputChange}
            name="duration"
            value={input.duration}
          />

        </div>






        <div>
          <label>Location (country) </label>
          <select
            name="country"
            value={input.country}
            onChange={handleInputChange}
          >
            <option disabled value="select">select</option>
            {temporaryCountries?.map(c=>{
              return (
                <option value={c.name}>{c.name}</option>


              )
            })}
          </select>
        </div>







        <div>
          <label>Difficulty </label>
          <select
            name="difficulty"
            value={input.difficulty}
            onChange={handleInputChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <label>Season </label>
          <select
            name="season"
            value={input.season}
            onChange={handleInputChange}
          >

            <option value="summer">summer</option>
            <option value="autumn">autumn</option>
            <option value="spring">spring</option>
            <option value="winter">winter</option>

          </select>
        </div>
        <button className='btn'type="submit" onClick={handleSubmit} name="button">
            Submit
          </button>
          </div>

      </form>
      </>
  );
}


function mapStateToProps(state) {
  return {
    countryDetail: state.countryDetail,
    temporaryCountries: state.temporaryCountries
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addActivity: (act)=> dispatch(addActivity(act)) ,
    getCountries: (name,populationOrder) => dispatch(getCountries(name,populationOrder))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddActivity);
