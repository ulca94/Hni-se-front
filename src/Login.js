import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Registrace</h2>
        <form method="post">
          <input type="text" id="input-nick" placeholder="Nick" />
          <input type="email" id="input-email" placeholder="Email" />
          <input type="password" id="input-pass" placeholder="Heslo" />
          <input type="submit" value="Zaregistrovat se" />
        </form>
      </div>
    );
  }
}

export default Login;
