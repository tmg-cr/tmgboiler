// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  device: {}
};

// Reducer
export default function DeviceEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_DEVICE_SUCCESS:
      return { ...state, device: action.payload };
    case types.UPDATE_DEVICE_SUCCESS:
      return { ...state, device: action.payload };
    case types.GET_DEVICE_SUCCESS:
      return { ...state, device: action.payload };
    case types.LIST_CUST_LOCATION_SUCCESS:
      return { ...state, listCust_Location: action.payload };
    case types.LIST_CUSTOMER_SUCCESS:
      return { ...state, listCustomer: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}