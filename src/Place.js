import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Place extends Component {
  render() {
    return (
      <div>
        <h2>Místa</h2>
        <input placeholder="Hledat místa..." type="text" />

        <form>
          <input type="checkbox" name="vehicle" value="Bike" /> I have a bike
          <br />
          <input type="checkbox" name="vehicle" value="Car" /> I have a car
          <br />
          <input type="checkbox" name="vehicle" value="Bike" /> I have a bike
          <br />
          <input type="checkbox" name="vehicle" value="Car" /> I have a car
          <br />
          <input type="checkbox" name="vehicle" value="Bike" /> I have a bike
          <br />
        </form>

        <div className="nav">
          <button>
            <NavLink to="/records">&lt; Předchozí</NavLink>
          </button>
          <button>
            <NavLink to="/home">Dokončit nastavení</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default Place;
