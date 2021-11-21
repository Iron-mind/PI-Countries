import { GET_COUNTRIES } from "../actions";

const initialState = {
  countries: [],
  countryDetail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      console.log(action.payload);
      return { ...state, countries: [...action.payload] };

    default:
      return state;
  }
}

export default rootReducer;
