const initailBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

import React from "react";

const GameBoard = () => {
  return (
    <ol className="grid grid-cols-3 gap-4 max-w-xs mx-auto mt-10">
      {initailBoard.map((row, rowIndex) => (
        <li  key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li   key={colIndex}>
                {" "}
                <button className="w-20 h-20 text-3xl my-2 font-bold border-2 border-gray-500 flex items-center justify-center hover:bg-gray-200" >{playerSymbol}</button>{" "}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
