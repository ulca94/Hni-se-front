import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Login from "./Login";
import UserRole from "./UserRole";
import Info from "./Info";
import Favorite from "./Favorite";
import Records from "./Records";

import "./styles.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Hni se</h1>
          <NavLink to="/">Login</NavLink>
          <span> </span>
          <NavLink to="/role">Role</NavLink>
          <span> </span>
          <NavLink to="/info">Info</NavLink>
          <span> </span>
          <NavLink to="/favorite">Sporty</NavLink>
          <span> </span>
          <NavLink to="/records">Rekordy</NavLink>

          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/role" component={UserRole} />
            <Route path="/info" component={Info} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/records" component={Records} />
          </div>

          <div class="nav">
            <button>&lt; Předchozí</button>
            <button>Další &gt;</button>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
