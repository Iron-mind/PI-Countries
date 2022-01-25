import { GET_COUNTRIES,
   GET_IN_ORDER,
    SET_INPUT,
    FILTER_BY_CONTINENT,
    GET_COUNTRY_BY_ID,
    POST_ACTIVITY
   } from "../actions";

const initialState = {
  countries: [],
  countryDetail:{},
  searchInput: '',
  temporaryCountries:[]

};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...state,
         countries: [...action.payload],
         temporaryCountries: [...action.payload]
        };

    case GET_IN_ORDER:
      return { ...state,

        countries: [...action.payload].reverse(),
        temporaryCountries: [...action.payload].reverse()
      };

    case SET_INPUT:
         return { ...state, searchInput: action.payload}

    case FILTER_BY_CONTINENT:
      if (action.payload==='none') {
        return  {

          ...state,
          countries: state.temporaryCountries
        };
      }
      return  {

        ...state,
        countries: state.temporaryCountries.filter((c)=>(c.continent===action.payload))
      };
    case GET_COUNTRY_BY_ID:
      return {
        ...state,
        countryDetail: action.payload

      }
    case POST_ACTIVITY:
    if (state.countryDetail.activities) {
      return {
        ...state,
        countryDetail: {
          ...state.countryDetail,
          activities:[...state.countryDetail.activities,action.payload]
        }
      }

      }else {
         return state
      }



      break;
    default:
      return state ;
  }
}

export default rootReducer;
