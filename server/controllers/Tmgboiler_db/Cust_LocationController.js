import Cust_LocationControllerGenerated from "./generated/Cust_LocationControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import Cust_LocationModel from "../../models/Tmgboiler_db/Cust_LocationModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/cust_location`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     Cust_LocationControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await Cust_LocationModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...Cust_LocationControllerGenerated,
  ...customControllers
};

