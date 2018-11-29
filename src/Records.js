import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Records extends Component {
  render() {
    return (
      <div>
        <h2>Rekordy</h2>
        <ul className="record-list">
          <li>
            <img
              src="https://www.linuxexpres.cz/uploads/perexy/firefox.png"
              alt=""
            />
            <h3>Běh</h3>
            <div>
              <label htmlFor="id1">Tempo:</label>
              <input id="id1" type="text" />
              <br />
              <label htmlFor="id2">eužhztbt:</label>
              <input id="id2" type="text" />
            </div>
          </li>
          <li>
            <img
              src="https://www.linuxexpres.cz/uploads/perexy/firefox.png"
              alt=""
            />
            <h3>Basket</h3>
            <div>
              <label htmlFor="id1">Tempo:</label>
              <input id="id1" type="text" />
              <br />
              <label htmlFor="id2">eužhztbt:</label>
              <input id="id2" type="text" />
            </div>
          </li>
          <li>
            <img
              src="https://www.linuxexpres.cz/uploads/perexy/firefox.png"
              alt=""
            />
            <h3>Fotbal</h3>
            <div>
              <label htmlFor="id1">Tempo:</label>
              <input id="id1" type="text" />
              <br />
              <label htmlFor="id2">eužhztbt:</label>
              <input id="id2" type="text" />
            </div>
          </li>
        </ul>

        <button>
          <NavLink to="/favorite">&lt; Předchozí</NavLink>
        </button>
        <button>
          <NavLink to="/place">Další &gt;</NavLink>
        </button>
      </div>
    );
  }
}

export default Records;
