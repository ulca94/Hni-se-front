import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Info extends Component {
  render() {
    return (
      <div>
        <h2>osobní informae</h2>
        <form className="z" method="post">
          <input type="text" name="role" placeholder="Jméno" />
          <input type="text" name="role" placeholder="Věk" />
        </form>

        <div className="nav">
          <button>
            <NavLink to="/favorite">Další &gt;</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default Info;
