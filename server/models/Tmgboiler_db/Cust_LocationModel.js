import Cust_LocationModelGenerated from "./generated/Cust_LocationModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Cust_LocationModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await Cust_LocationModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Cust_LocationModelGenerated,
  ...customModel
};
