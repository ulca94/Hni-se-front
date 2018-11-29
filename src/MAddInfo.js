import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MAddInfo extends Component {
  render() {
    return (
      <div>
        <h2>Dodatečné informace</h2>
        <form className="z" method="post">
          <input type="text" name="role" placeholder="Otevírací doba" />
          <input type="text" name="role" placeholder="Ceny" />
        </form>

        <div className="nav">
          <button>
            <NavLink to="/m-favorite">&lt; Předchozí</NavLink>
          </button>
          <button>
            <NavLink to="/m-photo">Další &gt;</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default MAddInfo;
