import React from "react";

export default function Square({ value, onClick }) {
  return (
    <div className="table-square" onClick={onClick}>
      <span className={value === "X" ? `tic` : `tac`}>{value}</span>
    </div>
  );
}
