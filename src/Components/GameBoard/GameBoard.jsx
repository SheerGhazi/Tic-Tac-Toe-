import { useState } from "react";

import React from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  
  const [gameBoard, setGameBoard] = useState(initailBoard)

  function handleSelectSquare(rowIndex,colIndex){
    setGameBoard((prevGameBoard)=>{
      prevGameBoard[rowIndex][colIndex]="X";
      return prevGameBoard;
    });
  }


  return (
    <ol className="grid grid-cols-3 gap-4 max-w-xs mx-auto mt-10">
      {initialBoard.map((row, rowIndex) => (
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



