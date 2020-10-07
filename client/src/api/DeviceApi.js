import DeviceApiGenerated from "./generated/DeviceApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DeviceApi extends DeviceApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Device List
  static getDeviceList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/devices")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DeviceApi;