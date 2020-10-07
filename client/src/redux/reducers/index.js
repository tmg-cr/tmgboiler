import { combineReducers } from "redux";

// START IMPORT REDUCERS
import AdminReducer from "./AdminReducer";
import Cust_LocationEditReducer from "./Cust_LocationEditReducer";
import Cust_LocationListReducer from "./Cust_LocationListReducer";
import CustomerEditReducer from "./CustomerEditReducer";
import CustomerListReducer from "./CustomerListReducer";
import DeviceEditReducer from "./DeviceEditReducer";
import DeviceListReducer from "./DeviceListReducer";
import HomeReducer from "./HomeReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	AdminReducer,
	Cust_LocationEditReducer,
	Cust_LocationListReducer,
	CustomerEditReducer,
	CustomerListReducer,
	DeviceEditReducer,
	DeviceListReducer,
	HomeReducer,
	UserEditReducer,
	UserListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
