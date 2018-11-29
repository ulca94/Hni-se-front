import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class MInfo extends Component {
  render() {
    return (
      <div>
        <h2>Informace o majiteli</h2>
        <form className="z" method="post">
          <input type="text" name="role" placeholder="Jméno" />
          <input type="text" name="role" placeholder="Kontakt" />
        </form>

        <div className="nav">
          <button>
            <NavLink to="/m-info-place">Další &gt;</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default MInfo;
