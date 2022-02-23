import React from "react";
import "../estilos/tablero.css";
import Celda from "./celda";

// most important   component is these one!

class Tablero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tablero">
        <h1>Tablero </h1>
        <div className="Container ">
          <table>
            <tr>
              <th>
                <Celda />
              </th>
              <th>
                <Celda />
              </th>
              <th>
                <Celda />
              </th>
              <th>
                <Celda />
              </th>
              <th>
                <Celda />
              </th>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Tablero;
