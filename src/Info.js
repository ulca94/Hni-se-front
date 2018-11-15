import React, { Component } from "react";

class Info extends Component {
  render() {
    return (
      <div>
        <h2>osobní informae</h2>
        <form method="post">
          <input type="text" name="role" placeholder="Jméno" />
          <input type="text" name="role" placeholder="Věk" />
        </form>
      </div>
    );
  }
}

export default Info;
