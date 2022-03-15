import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";


import {Port} from "views/admin/Port";
import {Quay} from "views/admin/Quay";
import {Reservation} from "views/admin/Reservation";
import {Ships} from "views/admin/Ships";
import {Systeme} from "views/admin/Systeme";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/port" exact component={Port} />
            <Route path="/admin/quay" exact component={Quay} />
            <Route path="/admin/reservation" exact component={Reservation} />
            <Route path="/admin/ships" exact component={Ships} />
            <Route path="/admin/systeme" exact component={Systeme} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
