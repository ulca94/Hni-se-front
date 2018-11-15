import React, { Component } from "react";

class Favorite extends Component {
  render() {
    return (
      <div>
        <h2>Oblíbené sporty</h2>
        <input type="text" placeholder="Vyhledávání..." />

        <h4>TOP 5</h4>
        <div class="top5">
          <form method="get" class="sports">
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
        <div class="top5">
          <form method="get" class="sports">
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
      </div>
    );
  }
}

export default Favorite;
