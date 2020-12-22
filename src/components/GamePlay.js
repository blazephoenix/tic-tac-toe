import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "../assets/play.css";
import { calculateWinner, getStatus } from "../helpers";
import Square from "./Square";

export default function GamePlay() {
  let [squares, setSquares] = useState(Array(9).fill(null));
  let location = useLocation();
  let history = useHistory();
  let [isXNext, setIsXNext] = useState(null);
  const winner = calculateWinner(squares);

  useEffect(() => {
    setIsXNext(location.state.isXNext);
  }, [location.state]);

  const renderTable = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const nextSquares = squares.slice();
          nextSquares[i] = isXNext ? "X" : "O";
          setSquares(nextSquares);

          setIsXNext(!isXNext); // toggle turns
        }}
      />
    );
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="scoreboard">{getStatus(winner, squares, isXNext)}</div>
        <div className="table">
          <div className="row">
            {renderTable(0)}
            {renderTable(1)}
            {renderTable(2)}
          </div>
          <div className="row">
            {renderTable(3)}
            {renderTable(4)}
            {renderTable(5)}
          </div>
          <div className="row">
            {renderTable(6)}
            {renderTable(7)}
            {renderTable(8)}
          </div>
        </div>
        <div className="options">
          <button
            className="button restart"
            onClick={() => {
              setSquares(Array(9).fill(null));
              setIsXNext(location.state.isXNext);
            }}
          >
            Restart
          </button>
          <button className="button" onClick={() => history.goBack()}>
            Pick side again
          </button>
        </div>
        <button className="button" onClick={() => history.push("/")}>
          Quit
        </button>
      </div>
    </div>
  );
}
