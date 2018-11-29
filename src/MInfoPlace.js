import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class MInfoPlace extends Component {
  render() {
    return (
      <div>
        <h2>Podrobnější informace</h2>
        <form className="z" method="post">
          <input type="text" name="role" placeholder="Název" />
          <input type="text" name="role" placeholder="Adresa" />
          <textarea name="pop" placeholder="Popis..." />
        </form>

        <div className="nav">
          <button>
            <NavLink to="/m-info">&lt; Předchozí</NavLink>
          </button>
          <button>
            <NavLink to="/m-favorite">Další &gt;</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default MInfoPlace;
