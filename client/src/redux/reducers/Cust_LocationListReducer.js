// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function Cust_LocationListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_CUST_LOCATION_SUCCESS:
      return { ...state, cust_location: action.payload };
    case types.LIST_CUST_LOCATION_SUCCESS:
      return { ...state, listCust_Location: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}