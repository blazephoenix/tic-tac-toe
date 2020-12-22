import React from "react";
import { Link } from "react-router-dom";

export default function GameStart() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="logo">
          <h1 className="ex">X</h1>
          <h1 className="zero">O</h1>
        </div>
        <h2 className="text-color">Pick your play mode</h2>
        <Link className="button blue" to="/#">
          With AI
        </Link>
        <Link className="button" to="/pick-side">
          With a friend
        </Link>
      </div>
    </div>
  );
}
