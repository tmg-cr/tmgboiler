// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import Cust_LocationModel from "../models/Tmgboiler_db/Cust_LocationModel";
import CustomerModel from "../models/Tmgboiler_db/CustomerModel";
import DeviceModel from "../models/Tmgboiler_db/DeviceModel";
import UserModel from "../models/Tmgboiler_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.tmgboiler_db_dbUrl);

    // Start Init Models

		Cust_LocationModel.init();
		CustomerModel.init();
		DeviceModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_tmgboiler_db = await mongoose.connect(
        "mongodb://" + properties.tmgboiler_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_tmgboiler_db;
  }
}

export default new Database();
