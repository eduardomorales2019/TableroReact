import React, { Component } from "react";
import "../estilos/tablero.css";
import Celda from "./celda";
// import Celda from "./celda";

// most important   component is these one!

class Tablero extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightsStarOn: 0.25,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
    console.log(props, "Soy props");
    console.log(this.state.board);
  }
  //   ================
  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    //  fill in all cells with a random `true` or `false` value
    //   - use `this.props.chanceLightStartsOn` to determine which cells are lit at start of game (use Math.random)  ...
    for (let y = 0; y < this.props.nrows; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(Math.random() < this.props.chanceLightsStarOn);
      }
      board.push(row);
    }
    return board;
  }

  //   flipsCellAround = (coordenada) => {
  //     let { ncols, nrows } = this.props;
  //     let board = this.state.board;
  //     // let [x, y] = coordenada.split.map(Numero);

  //     // function flipCell(y, x) {
  //     //   if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
  //     //     board[y][x] = !board[y][x];
  //     //   }
  //     // }
  //   };

  //   ================
  render() {
    const tableBoard = [];
    for (let y = 0; y < this.props.ncols; y++) {
      let row = [];
      for (let x = 0; x < this.props.ncols; x++) {
        row.push(<Celda isLit={this.state.board[y][x]} />); // aqui pasando la iteracion que  hace math. para que se pueda reflejar graficamente los true y los false.
      }
      tableBoard.push(<tr key={y}>{row}</tr>);
    }

    return (
      // a div can not be  with a table!!! as react Rule
      // so we put inside a tr with the row insode the tableBoard!!!
      <table className="tablero">
        <tbody className="Container">{tableBoard}</tbody>
      </table>
    );
  }
}

export default Tablero;
