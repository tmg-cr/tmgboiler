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
 *  TO CUSTOMIZE FUNCTIONS IN DeviceActionsGenerated.js PLEASE EDIT ../DeviceActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import DeviceApi from "../../../api/DeviceApi";

let actionsFunction = {

  //CRUD METHODS

  // Create device
  createDevice: function(device) {
    return function(dispatch) {
      return DeviceApi
        .createDevice(device)
        .then(device => {
          dispatch(actionsFunction.createDeviceSuccess(device));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createDeviceSuccess: function(device) {
    return { type: types.CREATE_DEVICE_SUCCESS, payload: device };
  },


  // Delete device
  deleteDevice: function(id) {
    return function(dispatch) {
      return DeviceApi
        .deleteDevice(id)
        .then(device => {
          dispatch(actionsFunction.deleteDeviceSuccess(device));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteDeviceSuccess: function(device) {
    return { type: types.DELETE_DEVICE_SUCCESS, payload: device };
  },


  // Find by _Customer
  findBy_Customer: function(key) {
    return function(dispatch) {
      return DeviceApi
        .findBy_Customer(key)
        .then(item => {
          dispatch(actionsFunction.findBy_CustomerSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_CustomerSuccess: function(item) {
    return { type: types.FINDBY_CUSTOMER_DEVICE_SUCCESS, payload: item };
  },


  // Find by _Customer_Location
  findBy_Customer_Location: function(key) {
    return function(dispatch) {
      return DeviceApi
        .findBy_Customer_Location(key)
        .then(item => {
          dispatch(actionsFunction.findBy_Customer_LocationSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_Customer_LocationSuccess: function(item) {
    return { type: types.FINDBY_CUSTOMER_LOCATION_DEVICE_SUCCESS, payload: item };
  },


  // Get device
  loadDevice: function(id) {
    return function(dispatch) {
      return DeviceApi
        .getOneDevice(id)
        .then(device => {
          dispatch(actionsFunction.loadDeviceSuccess(device));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDeviceSuccess: function(device) {
    return { type: types.GET_DEVICE_SUCCESS, payload: device };
  },

  // Load  list
  loadDeviceList: function() {
    return function(dispatch) {
      return DeviceApi
        .getDeviceList()
        .then(list => {
          dispatch(actionsFunction.loadDeviceListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDeviceListSuccess: function(list) {
    return { type: types.LIST_DEVICE_SUCCESS, payload: list };
  },

	
  // Save device
  saveDevice: function(device) {
    return function(dispatch) {
      return DeviceApi
        .saveDevice(device)
        .then(device => {
          dispatch(actionsFunction.saveDeviceSuccess(device));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveDeviceSuccess: function(device) {
    return { type: types.UPDATE_DEVICE_SUCCESS, payload: device };
  },


};

export default actionsFunction;