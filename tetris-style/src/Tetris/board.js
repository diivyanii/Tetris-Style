import React, { memo, useEffect, useRef } from "react";
import { useBoard } from "./useBoard";
import logo from "./logo.png";

const Board = () => {
  const [display, score, onKeyDown] = useBoard();
  const eBoard = useRef();

  useEffect(focusBoard, []);

  function focusBoard() {
    eBoard.current.focus();
  }

  return (
    <div className="App">
      <img src={logo} alt="Logo" className="logo" />
      <div
        ref={eBoard}
        className={"t-board"}
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        {display.map((row, index) => (
          <Row row={row} key={index} />
        ))}
      </div>
      <div>
        <span className="t-score-label">Score:</span>
        <span className="t-score-label">{score.toLocaleString()}</span>
      </div>
    </div>
  );
};

const Row = memo((props) => {
  return (
    <span className="t-row">
      {props.row.map((cell, index) => (
        <Cell cell={cell} key={index} />
      ))}
    </span>
  );
});

const Cell = memo((props) => {
  const count = useRef(0);

  count.current++;

  const value = props.cell ? props.cell : 0;
  return <span className={`t-cell t-cell-${value}`}></span>;
});

export default memo(Board);
