// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function DeviceListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_DEVICE_SUCCESS:
      return { ...state, device: action.payload };
    case types.LIST_DEVICE_SUCCESS:
      return { ...state, listDevice: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}