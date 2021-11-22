export var GET_COUNTRIES = "GET_COUNTRIES";

export function getCountries(name) {
    
  if (name) {
    return  function (dispatch) {
        return fetch("http://localhost:3001/countries?name=" + name)
          .then((response) => response.json())
          .then((json) => {
            dispatch({ type: GET_COUNTRIES, payload: json });
          });
      };
    
    
  }
  
  return  function (dispatch) {
    return fetch("http://localhost:3001/countries")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: GET_COUNTRIES, payload: json });
      })
      .catch(console.warn('server response error'));
  };
}
