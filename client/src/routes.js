// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import Admin from "./pages/Admin";
import Cust_LocationEdit from "./pages/Cust_LocationEdit";
import Cust_LocationList from "./pages/Cust_LocationList";
import CustomerEdit from "./pages/CustomerEdit";
import CustomerList from "./pages/CustomerList";
import DeviceEdit from "./pages/DeviceEdit";
import DeviceList from "./pages/DeviceList";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/admin" component={ Admin } roles={[ 'ADMIN', ]}  />
              <PrivateRoute exact path="/cust_locations/:id" component={ Cust_LocationEdit }  />
              <PrivateRoute exact path="/cust_locations" component={ Cust_LocationList }  />
              <PrivateRoute exact path="/customers/:id" component={ CustomerEdit }  />
              <PrivateRoute exact path="/customers" component={ CustomerList }  />
              <PrivateRoute exact path="/devices/:id" component={ DeviceEdit }  />
              <PrivateRoute exact path="/devices" component={ DeviceList }  />
              <PrivateRoute exact path="/users/:id" component={ UserEdit }  />
              <PrivateRoute exact path="/users" component={ UserList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;