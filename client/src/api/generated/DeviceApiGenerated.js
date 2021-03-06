/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN DeviceApiGenerated.js PLEASE EDIT ../DeviceApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class DeviceApiGenerated {

  static contextUrl = properties.endpoint + "/device";

  // CRUD METHODS

  /**
  * DeviceService.create
  *   @description CRUD ACTION create
  *
  */
  static createDevice(device) {
    return axios.post(DeviceApiGenerated.contextUrl, device )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * DeviceService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteDevice(id) {
    return axios.delete(DeviceApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * DeviceService.findBy_Customer
  *   @description CRUD ACTION findBy_Customer
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_Customer(id) {
    return axios.get(DeviceApiGenerated.contextUrl + "/findBy_Customer/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * DeviceService.findBy_Customer_Location
  *   @description CRUD ACTION findBy_Customer_Location
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_Customer_Location(id) {
    return axios.get(DeviceApiGenerated.contextUrl + "/findBy_Customer_Location/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * DeviceService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneDevice(id) {
    return axios.get(DeviceApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * DeviceService.list
  *   @description CRUD ACTION list
  *
  */
  static getDeviceList() {
    return axios.get(DeviceApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * DeviceService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveDevice(device) {
    return axios.post(DeviceApiGenerated.contextUrl + "/" + device._id, device )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default DeviceApiGenerated;
