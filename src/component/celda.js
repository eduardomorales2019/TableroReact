import React from "react";
import "../estilos/celda.css";
class Celda extends React.Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick = () => {
    console.log("Click");
    // here  i will call up the board to flip cells around this cell.
    // this.props.flipcellAroundme()  --- aqui iria este metodo al momento de hacer click cambia color.
  };
  //   ============
  render() {
    // dependieng on variable is gonna lit  with the class
    let classes = "Cell" + (this.props.isLit ? "Cell-lit" : "");
    return <td className={classes} onClick={this.handlerClick}></td>;
  }
}

export default Celda;
