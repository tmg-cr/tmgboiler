// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import DeviceActions from "../redux/actions/DeviceActions";

// END IMPORT ACTIONS

/** APIs

* actionsDevice.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsDevice.list
*	@description CRUD ACTION list
*

**/


class DeviceList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsDevice.loadDeviceList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsDevice.deleteDevice(this.state.idDelete).then(data => {
      this.props.actionsDevice.loadDeviceList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "Date_Created",
        type: "date",
        label: "Date_Created"
      }, 
      {
        id: "IP_Address",
        type: "string",
        label: "IP_Address"
      }, 
      {
        id: "Last_Modified",
        type: "date",
        label: "Last_Modified"
      }, 
      {
        id: "Name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "Notes",
        type: "string",
        label: "Notes"
      }, 
      {
        id: "Password",
        type: "string",
        label: "Password"
      }, 
      {
        id: "Type",
        type: "string",
        label: "Type"
      }, 
      {
        id: "Username",
        type: "string",
        label: "Username"
      },
    ];
    const link = "/devices/";

    return (
      <div>
        <h1>Device List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Date_Created</TableCell>
              <TableCell align="right">IP_Address</TableCell>
              <TableCell align="right">Last_Modified</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Notes</TableCell>
              <TableCell align="right">Password</TableCell>
              <TableCell align="right">Type</TableCell>
              <TableCell align="right">Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/devices/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.Date_Created }</TableCell>
                <TableCell align="right">{ row.IP_Address }</TableCell>
                <TableCell align="right">{ row.Last_Modified }</TableCell>
                <TableCell align="right">{ row.Name }</TableCell>
                <TableCell align="right">{ row.Notes }</TableCell>
                <TableCell align="right">{ row.Password }</TableCell>
                <TableCell align="right">{ row.Type }</TableCell>
                <TableCell align="right">{ row.Username }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/devices/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsDevice: bindActionCreators(DeviceActions, dispatch),
  };
};

// Validate types
DeviceList.propTypes = { 
  actionsDevice: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.DeviceListReducer.listDevice
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeviceList);
