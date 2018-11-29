import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MAddInfo extends Component {
  render() {
    return (
      <div>
        <h2>Fotky</h2>
        <input type="file" name="img" multiple />

        <div className="nav">
          <button>
            <NavLink to="/m-add-info">&lt; Předchozí</NavLink>
          </button>
          <button>
            <NavLink to="/home">Dokončit nastavení</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default MAddInfo;
