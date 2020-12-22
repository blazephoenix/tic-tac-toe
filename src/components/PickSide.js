import React, { useState, createContext } from "react";
import { Link } from "react-router-dom";
import "../assets/pick-side.css";

export const StateContext = createContext();

export default function PickSide() {
  let [isXNext, setIsXNext] = useState(true);
  return (
    <div className="container">
      <div className="wrapper">
        <h2 className="text-color">Pick your side</h2>
        <div className="input-select">
          <div
            className={isXNext ? `select-ex selected` : `select-ex`}
            onClick={() => {
              setIsXNext(true);
            }}
          >
            <h1 className="ex">X</h1>
            <input
              type="radio"
              name="select"
              id="select"
              value={true}
              onChange={(e)=>{setIsXNext(e.target.value)}}
              checked={isXNext === true}
            />
          </div>
          <div
            className={!isXNext ? `select-zero selected` : `select-zero`}
            onClick={() => {
              setIsXNext(false);
            }}
          >
            <h1 className="zero">O</h1>
            <input
              type="radio"
              name="select"
              value={false}
              id="select"
              onChange={(e)=>{setIsXNext(e.target.value)}}
              checked={isXNext === false}
            />
          </div>
        </div>
        <Link
          to={{
            pathname: "/play",
            state: { isXNext: isXNext },
          }}
          className="button"
        >
          Continue
        </Link>
      </div>
    </div>
  );
}
