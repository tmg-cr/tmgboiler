// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  cust_location: {}
};

// Reducer
export default function Cust_LocationEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CUST_LOCATION_SUCCESS:
      return { ...state, cust_location: action.payload };
    case types.UPDATE_CUST_LOCATION_SUCCESS:
      return { ...state, cust_location: action.payload };
    case types.GET_CUST_LOCATION_SUCCESS:
      return { ...state, cust_location: action.payload };
    case types.LIST_CUSTOMER_SUCCESS:
      return { ...state, listCustomer: action.payload };
    case types.FINDBY_CUSTOMER_LOCATION_DEVICE_SUCCESS:
      return { ...state, listDevice: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}