import Cust_LocationApiGenerated from "./generated/Cust_LocationApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Cust_LocationApi extends Cust_LocationApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Cust_Location List
  static getCust_LocationList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/cust_locations")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Cust_LocationApi;