import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Redirect } from "react-router";

class Login extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      fireRedirect: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ fireRedirect: true });
  }
  render() {
    const { fireRedirect } = this.state;
    return (
      <div>
        <h2 className="switch-login">
          Login | <NavLink to="/signup">Registrace</NavLink>
        </h2>
        <form onSubmit={this.handleSubmit} className="z">
          <input type="email" id="input-email" placeholder="Email" />
          <input type="password" id="input-pass" placeholder="Heslo" />
          <input type="submit" value="Login" />
        </form>
        {fireRedirect && <Redirect to={"/home"} />}
      </div>
    );
  }
}

export default Login;
