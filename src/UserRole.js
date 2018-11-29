import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class UserRole extends Component {
  render() {
    return (
      <div>
        <h2>Vyberte roli</h2>
        <div className="nav">
          <button>
            <NavLink to="/info">Uživatel</NavLink>
          </button>
          <button>
            <NavLink to="/m-info">Majitel</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default UserRole;
