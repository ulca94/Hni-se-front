import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Favorite extends Component {
  render() {
    return (
      <div>
        <h2>Oblíbené sporty</h2>
        <input type="text" placeholder="Vyhledávání..." />

        <h4>TOP 5</h4>
        <div className="top5">
          <form method="get" className="sports z">
            <div>
              <input type="checkbox" name="vehicle" value="Bike" /> Běh
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Fotbal
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Plavání
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Kolo
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Kuželky
            </div>
          </form>
        </div>

        <h4>A- Z</h4>
        <div className="top5">
          <form method="get" className="sports z">
            <div>
              <input type="checkbox" name="vehicle" value="Bike" /> Běh
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Fotbal
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Plavání
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Kolo
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Kuželky
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Bike" /> Běh
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Fotbal
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Plavání
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Kolo
            </div>
            <div>
              <input type="checkbox" name="vehicle" value="Car" /> Kuželky
            </div>
          </form>
        </div>
        <div />

        <div className="nav">
          <button>
            <NavLink to="/info">&lt; Předchozí</NavLink>
          </button>
          <button>
            <NavLink to="/records">Další &gt;</NavLink>
          </button>
        </div>
      </div>
    );
  }
}

export default Favorite;
