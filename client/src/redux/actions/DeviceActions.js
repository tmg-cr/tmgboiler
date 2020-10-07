import actionsFunction from "./generated/DeviceActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import DeviceApi from "../../api/DeviceApi";
 
 actionsFunction.loadDeviceList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return DeviceApi
     .getDeviceList()
     .then(list => {
       dispatch(actionsFunction.loadDeviceSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
