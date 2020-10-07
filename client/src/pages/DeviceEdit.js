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
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import DeviceActions from "../redux/actions/DeviceActions";
import Cust_LocationActions from "../redux/actions/Cust_LocationActions";
import CustomerActions from "../redux/actions/CustomerActions";

// END IMPORT ACTIONS

/** APIs

* actionsDevice.create
*	@description CRUD ACTION create
*
* actionsDevice.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsDevice.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsCust_Location.list
*	@description CRUD ACTION list
*
* actionsCustomer.list
*	@description CRUD ACTION list
*

**/

class DeviceEdit extends Component {
  // Init device
  constructor(props) {
    super(props);
    this.state = {
      device: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDevice.loadDevice(this.props.match.params.id);
    }
    
    this.props.actionsCustomer.loadCustomerList();
    this.props.actionsCust_Location.loadCust_LocationList();
  }

  // Insert props device in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      device: props.device
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.device._id) {
      this.props.actionsDevice.saveDevice(this.state.device).then(data => {
        this.props.history.push("/devices/");
      });
    } else {
      this.props.actionsDevice.createDevice(this.state.device).then(data => {
        this.props.history.push("/devices/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Device Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="Date_Created"
            label="Date_Created"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.device.Date_Created
                ? new Date(this.state.device.Date_Created)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "device", "Date_Created")}
            fullWidth
            autoOk
            disableFuture
            required
            {...(!this.state.device.Date_Created && this.state.device.Date_Created === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="IP_Address"
            label="IP_Address"
            value={this.state.device.IP_Address || ""}
            onChange={Utils.handleChange.bind(this, "device")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.device.IP_Address && this.state.device.IP_Address === ""
              ? { error: true }
              : {})}
          />
          
          <DateTimePicker
            id="Last_Modified"
            label="Last_Modified"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.device.Last_Modified
                ? new Date(this.state.device.Last_Modified)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "device", "Last_Modified")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.device.Name || ""}
            onChange={Utils.handleChange.bind(this, "device")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.device.Name && this.state.device.Name === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Notes"
            label="Notes"
            value={this.state.device.Notes || ""}
            onChange={Utils.handleChange.bind(this, "device")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Password"
            label="Password"
            value={this.state.device.Password || ""}
            onChange={Utils.handleChange.bind(this, "device")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.device.Password && this.state.device.Password === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Type"
            label="Type"
            value={this.state.device.Type || ""}
            onChange={Utils.handleChange.bind(this, "device")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.device.Type && this.state.device.Type === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="Username"
            label="Username"
            value={this.state.device.Username || ""}
            onChange={Utils.handleChange.bind(this, "device")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.device.Username && this.state.device.Username === ""
              ? { error: true }
              : {})}
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _Customer with Customer */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_Customer">
              _Customer
            </InputLabel>
            <Select
              value={this.state.device._Customer || ""}
              onChange={Utils.handleChangeSelect.bind(this, "device")}
              inputProps={{
                id: "_Customer",
                name: "_Customer"
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
          
          
          {/* Relation 1:m _Customer_Location with Cust_Location */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_Customer_Location">
              _Customer_Location
            </InputLabel>
            <Select
              value={this.state.device._Customer_Location || ""}
              onChange={Utils.handleChangeSelect.bind(this, "device")}
              inputProps={{
                id: "_Customer_Location",
                name: "_Customer_Location"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listCust_Location && this.props.listCust_Location.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/devices/">Back to list</Link>

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
    actionsDevice: bindActionCreators(DeviceActions, dispatch),
    actionsCust_Location: bindActionCreators(Cust_LocationActions, dispatch),
    actionsCustomer: bindActionCreators(CustomerActions, dispatch),
  };
};

// Validate types
DeviceEdit.propTypes = { 
  actionsDevice: PropTypes.object.isRequired,
  actionsCust_Location: PropTypes.object.isRequired,
  actionsCustomer: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    device: state.DeviceEditReducer.device,
    listCustomer: state.DeviceEditReducer.listCustomer,
    listCust_Location: state.DeviceEditReducer.listCust_Location
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceEdit);
