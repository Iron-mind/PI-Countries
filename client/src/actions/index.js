export var GET_COUNTRIES = "GET_COUNTRIES";
export var GET_IN_ORDER = "GET_IN_ORDER";
export var SET_INPUT = "SET_INPUT";
export var FILTER_BY_CONTINENT = "FILTER_BY_CONTINENT";
export var GET_COUNTRY_BY_ID = "GET_COUNTRY_BY_ID";
export var POST_ACTIVITY = "POST_ACTIVITY";


export function getCountries(name, populationOrder = false) {
  if (name) {
    return function (dispatch) {
      return fetch(
        "http://localhost:3001/countries?name=" +
          name +
          "&Pasc=" +
          populationOrder
      )
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GET_COUNTRIES, payload: json });
        });
    };
  } else {
    return function (dispatch) {
      return fetch("http://localhost:3001/countries?Pasc=" + populationOrder)
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: GET_COUNTRIES, payload: json });
        });
    };
  }

  // if (name) {
  // return  function (dispatch) {
  //     return fetch("http://localhost:3001/countries?name=" + name)
  //       .then((response) => response.json())
  //       .then((json) => {
  //         dispatch({ type: GET_COUNTRIES, payload: json });
  //       });
  //   };

  // }
  //
  //   return  function (dispatch) {
  //     return fetch("http://localhost:3001/countries")
  //       .then((response) => response.json())
  //       .then((json) => {
  //         dispatch({ type: GET_COUNTRIES, payload: json });
  //       })
  //       .catch(console.warn('server response error'));
  //   };
}

//brings the countries and the reducer reverses them
//
export function getCountriesInOrder(name, populationOrder = false) {
  return function (dispatch) {
    return fetch(
      "http://localhost:3001/countries?name=" +
        name +
        "&Pasc=" +
        populationOrder
    )
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_IN_ORDER, payload: json });
      })
      .catch(console.warn("server response error"));
  };
}

export function setSearchInput(input) {
  return {
    type: SET_INPUT,
    payload: input,
  };
}

export function filterByContinent(cont) {
  return {
    type: FILTER_BY_CONTINENT,
    payload: cont, //continent
  };
}

export function getCountryByID(ID) {
  return function (dispatch) {
    return fetch("http://localhost:3001/countries/" + ID)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_COUNTRY_BY_ID, payload: json });
      })
      .catch(console.warn("server response error"));
  };
}

export function addActivity(act) {
  // body...



  // const response = await fetch(url, {
  //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //   mode: 'cors', // no-cors, *cors, same-origin
  //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //   credentials: 'same-origin', // include, *same-origin, omit
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   redirect: 'follow', // manual, *follow, error
  //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //   body: JSON.stringify(data) // body data type must match "Content-Type" header
  // })



  // Petición HTTP

  return function (dispatch) {
    async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }



    return postData("http://localhost:3001/activity", act)
      .then((json) => {
        dispatch({ type: POST_ACTIVITY, payload: json });
      })
      .catch(err=>console.warn("server response error",err));
  };

}
