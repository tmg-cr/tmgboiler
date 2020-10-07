// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import CustomerActions from "../redux/actions/CustomerActions";
import Cust_LocationActions from "../redux/actions/Cust_LocationActions";
import DeviceActions from "../redux/actions/DeviceActions";

// END IMPORT ACTIONS

/** APIs

* actionsCustomer.create
*	@description CRUD ACTION create
*
* actionsCustomer.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCustomer.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsCust_Location.findBy_Customer_Name
*	@description CRUD ACTION findBy_Customer_Name
*	@param Objectid key - Id of model to search for
*
* actionsDevice.findBy_Customer
*	@description CRUD ACTION findBy_Customer
*	@param Objectid key - Id of model to search for
*

**/

class CustomerEdit extends Component {
  // Init customer
  constructor(props) {
    super(props);
    this.state = {
      customer: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCustomer.loadCustomer(this.props.match.params.id);
      this.props.actionsDevice.findBy_Customer(this.props.match.params.id);
      this.props.actionsCust_Location.findBy_Customer_Name(this.props.match.params.id);
    }
    
  }

  // Insert props customer in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      customer: props.customer
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.customer._id) {
      this.props.actionsCustomer.saveCustomer(this.state.customer).then(data => {
        this.props.history.push("/customers/");
      });
    } else {
      this.props.actionsCustomer.createCustomer(this.state.customer).then(data => {
        this.props.history.push("/customers/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Customer Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="Name"
            label="Name"
            value={this.state.customer.Name || ""}
            onChange={Utils.handleChange.bind(this, "customer")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.customer.Name && this.state.customer.Name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Notes"
            label="Notes"
            value={this.state.customer.Notes || ""}
            onChange={Utils.handleChange.bind(this, "customer")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Device */}
          
          <h3>Device</h3>
          {(!this.props.listDevice || this.props.listDevice.length === 0) && 
            <div>No Device associated</div>
          }
          {this.props.listDevice &&
            this.props.listDevice.map((item, i) => {
              return (
                <Link to={"/devices/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Cust_Location */}
          
          <h3>Cust_Location</h3>
          {(!this.props.listCust_Location || this.props.listCust_Location.length === 0) && 
            <div>No Cust_Location associated</div>
          }
          {this.props.listCust_Location &&
            this.props.listCust_Location.map((item, i) => {
              return (
                <Link to={"/cust_locations/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/customers/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsCustomer: bindActionCreators(CustomerActions, dispatch),
    actionsCust_Location: bindActionCreators(Cust_LocationActions, dispatch),
    actionsDevice: bindActionCreators(DeviceActions, dispatch),
  };
};

// Validate types
CustomerEdit.propTypes = { 
  actionsCustomer: PropTypes.object.isRequired,
  actionsCust_Location: PropTypes.object.isRequired,
  actionsDevice: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    customer: state.CustomerEditReducer.customer,
    listDevice: state.CustomerEditReducer.listDevice,
    listCust_Location: state.CustomerEditReducer.listCust_Location
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerEdit);
