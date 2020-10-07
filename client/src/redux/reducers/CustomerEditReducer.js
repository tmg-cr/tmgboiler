// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  customer: {}
};

// Reducer
export default function CustomerEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_CUSTOMER_SUCCESS:
      return { ...state, customer: action.payload };
    case types.UPDATE_CUSTOMER_SUCCESS:
      return { ...state, customer: action.payload };
    case types.GET_CUSTOMER_SUCCESS:
      return { ...state, customer: action.payload };
    case types.FINDBY_CUSTOMER_NAME_CUST_LOCATION_SUCCESS:
      return { ...state, listCust_Location: action.payload };
    case types.FINDBY_CUSTOMER_DEVICE_SUCCESS:
      return { ...state, listDevice: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}