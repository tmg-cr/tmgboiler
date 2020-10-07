import actionsFunction from "./generated/Cust_LocationActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import Cust_LocationApi from "../../api/Cust_LocationApi";
 
 actionsFunction.loadCust_LocationList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return Cust_LocationApi
     .getCust_LocationList()
     .then(list => {
       dispatch(actionsFunction.loadCust_LocationSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
