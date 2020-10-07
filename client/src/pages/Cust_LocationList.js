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
import Cust_LocationActions from "../redux/actions/Cust_LocationActions";

// END IMPORT ACTIONS

/** APIs

* actionsCust_Location.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsCust_Location.list
*	@description CRUD ACTION list
*

**/


class Cust_LocationList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsCust_Location.loadCust_LocationList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsCust_Location.deleteCust_Location(this.state.idDelete).then(data => {
      this.props.actionsCust_Location.loadCust_LocationList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "City",
        type: "string",
        label: "City"
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
        id: "State",
        type: "string",
        label: "State"
      }, 
      {
        id: "Street_Address",
        type: "string",
        label: "Street_Address"
      }, 
      {
        id: "Zip_Code",
        type: "string",
        label: "Zip_Code"
      },
    ];
    const link = "/cust_locations/";

    return (
      <div>
        <h1>Cust_Location List</h1>

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
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Notes</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Street_Address</TableCell>
              <TableCell align="right">Zip_Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/cust_locations/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.City }</TableCell>
                <TableCell align="right">{ row.Name }</TableCell>
                <TableCell align="right">{ row.Notes }</TableCell>
                <TableCell align="right">{ row.State }</TableCell>
                <TableCell align="right">{ row.Street_Address }</TableCell>
                <TableCell align="right">{ row.Zip_Code }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/cust_locations/new">
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
    actionsCust_Location: bindActionCreators(Cust_LocationActions, dispatch),
  };
};

// Validate types
Cust_LocationList.propTypes = { 
  actionsCust_Location: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Cust_LocationListReducer.listCust_Location
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cust_LocationList);
