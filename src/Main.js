import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";
import Login from "./Login";
import UserRole from "./UserRole";
import Info from "./Info";
import Favorite from "./Favorite";
import Records from "./Records";
import Place from "./Place";
import Home from "./Home";
import Signup from "./Signup";
import MInfo from "./MInfo";
import MInfoPlace from "./MInfoPlace";
import MFavorite from "./MFavorite";
import MAddInfo from "./MAddInfo";
import MPhoto from "./MPhoto";

import "./styles.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Hni se</h1>

          <div className="content">
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/role" component={UserRole} />
            <Route path="/info" component={Info} />
            <Route path="/favorite" component={Favorite} />
            <Route path="/records" component={Records} />
            <Route path="/place" component={Place} />
            <Route path="/home" component={Home} />
            <Route path="/m-info" component={MInfo} />
            <Route path="/m-info-place" component={MInfoPlace} />
            <Route path="/m-favorite" component={MFavorite} />
            <Route path="/m-add-info" component={MAddInfo} />
            <Route path="/m-photo" component={MPhoto} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
