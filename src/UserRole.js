import React, { Component } from "react";

class UserRole extends Component {
  render() {
    return (
      <div>
        <h2>Vyberte roli</h2>
        <form method="post">
          <input type="radio" name="role" /> Uživatel
          <input type="radio" name="role" /> Majitel
        </form>
      </div>
    );
  }
}

export default UserRole;
