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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import Cust_LocationActions from "../redux/actions/Cust_LocationActions";
import CustomerActions from "../redux/actions/CustomerActions";
import DeviceActions from "../redux/actions/DeviceActions";

// END IMPORT ACTIONS

/** APIs

* actionsCust_Location.create
*	@description CRUD ACTION create
*
* actionsCust_Location.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsCust_Location.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsCustomer.list
*	@description CRUD ACTION list
*
* actionsDevice.findBy_Customer_Location
*	@description CRUD ACTION findBy_Customer_Location
*	@param Objectid key - Id of model to search for
*

**/

class Cust_LocationEdit extends Component {
  // Init cust_location
  constructor(props) {
    super(props);
    this.state = {
      cust_location: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsCust_Location.loadCust_Location(this.props.match.params.id);
      this.props.actionsDevice.findBy_Customer_Location(this.props.match.params.id);
    }
    
    this.props.actionsCustomer.loadCustomerList();
  }

  // Insert props cust_location in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      cust_location: props.cust_location
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.cust_location._id) {
      this.props.actionsCust_Location.saveCust_Location(this.state.cust_location).then(data => {
        this.props.history.push("/cust_locations/");
      });
    } else {
      this.props.actionsCust_Location.createCust_Location(this.state.cust_location).then(data => {
        this.props.history.push("/cust_locations/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Cust_Location Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="City"
            label="City"
            value={this.state.cust_location.City || ""}
            onChange={Utils.handleChange.bind(this, "cust_location")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.cust_location.Name || ""}
            onChange={Utils.handleChange.bind(this, "cust_location")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.cust_location.Name && this.state.cust_location.Name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Notes"
            label="Notes"
            value={this.state.cust_location.Notes || ""}
            onChange={Utils.handleChange.bind(this, "cust_location")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="State"
            label="State"
            value={this.state.cust_location.State || ""}
            onChange={Utils.handleChange.bind(this, "cust_location")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Street_Address"
            label="Street_Address"
            value={this.state.cust_location.Street_Address || ""}
            onChange={Utils.handleChange.bind(this, "cust_location")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Zip_Code"
            label="Zip_Code"
            value={this.state.cust_location.Zip_Code || ""}
            onChange={Utils.handleChange.bind(this, "cust_location")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _Customer_Name with Customer */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_Customer_Name">
              _Customer_Name
            </InputLabel>
            <Select
              value={this.state.cust_location._Customer_Name || ""}
              onChange={Utils.handleChangeSelect.bind(this, "cust_location")}
              inputProps={{
                id: "_Customer_Name",
                name: "_Customer_Name"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listCustomer && this.props.listCustomer.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/cust_locations/">Back to list</Link>

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
    actionsCust_Location: bindActionCreators(Cust_LocationActions, dispatch),
    actionsCustomer: bindActionCreators(CustomerActions, dispatch),
    actionsDevice: bindActionCreators(DeviceActions, dispatch),
  };
};

// Validate types
Cust_LocationEdit.propTypes = { 
  actionsCust_Location: PropTypes.object.isRequired,
  actionsCustomer: PropTypes.object.isRequired,
  actionsDevice: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    cust_location: state.Cust_LocationEditReducer.cust_location,
    listCustomer: state.Cust_LocationEditReducer.listCustomer,
    listDevice: state.Cust_LocationEditReducer.listDevice
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cust_LocationEdit);
