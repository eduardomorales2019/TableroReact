import React from "react";
import "../estilos/celda.css";
class Celda extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "none" };
  }
  render() {
    return (
      <div>
        <p>{this.state.color}</p>
      </div>
    );
  }
}

export default Celda;
