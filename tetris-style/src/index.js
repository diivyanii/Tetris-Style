import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Board from "./Tetris/board";

function Game() {
  return (
    <div className="t-parent">
      <Board />
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
