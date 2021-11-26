import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { getCountryByID } from "../actions/index";
import { Link } from "react-router-dom";

import "./Country.css";

function Country({ countryDetail, getCountryByID }) {
  let { ID } = useParams();
  //component did mount
  useEffect(() => {
    getCountryByID(ID);
  }, []);


  let activities = countryDetail.activities?.map((act) => {
    return (
      <div className="activity">
        <h3> {act.name}</h3>
        <div>
          <span className="data">Difficulty:</span> {act.difficulty}
        </div>
        <div>
          <span className="data">Duration:</span> {act.duration}
        </div>
        <div>
          <span className="data">Season:</span> {act.season}
        </div>
      </div>
    );
  });
  let countryComponent = (
    <div className="country">
      <div>
        <h1>{countryDetail.name}</h1>

        <div className="container-info">
          <img src={countryDetail.flagImage} alt="" />
          <div>
            <ul>
              <li>The capital city is {countryDetail.capital}</li>
              <li>
                Has a population of{" "}
                {countryDetail.population_Size > 1000000 ? (
                  <span>
                    {Math.round(countryDetail.population_Size / 1000000)} M
                  </span>
                ) : (
                  countryDetail.population_Size
                )}
              </li>
              <li>Has an area of {countryDetail.area} square meters.</li>
            </ul>

            <div>
              <label htmlFor="btn-add-activity">
              <Link to="/add-activity" style={{ textDecoration: 'none' }} >
              <button className="btn-add-activity"> Add Activity</button>


              </Link>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h1>Activities</h1>
        <div className="activities-container">{activities}</div>
      </div>
    </div>
  );


  return (
    <>
      {!countryDetail ? (
        <div>Country Not found, go to home</div>
      ) : (
        countryComponent
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    countryDetail: state.countryDetail,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getCountryByID: (ID) => dispatch(getCountryByID(ID)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Country);
