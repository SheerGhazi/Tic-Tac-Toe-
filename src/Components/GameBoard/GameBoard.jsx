// import { useState } from "react";

import React from "react";



const GameBoard = ({ onSelectSquare,  board  } ) => {
  
  // const [gameBoard, setGameBoard] = useState(initialBoard)

  // function handleSelectSquare(rowIndex,colIndex){
  //   setGameBoard((prevGameBoard)=>{
  //     const updatedBoard = [...prevGameBoard.map(innerArray =>[...innerArray])]
  //     updatedBoard [rowIndex] [colIndex] = activePlayerSymbol ;
  //     return updatedBoard;
  //   });

  //   onSelectSquare();
  

  


  return (
    <ol className="grid grid-cols-3 gap-4 max-w-xs mx-auto mt-10">
      {board.map((row, rowIndex) => (
        <li  key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li   key={colIndex}>
                {" "}
                <button className="w-20 h-20 text-3xl my-2 font-bold border-2 border-gray-500 flex items-center justify-center " onClick={ ()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol !== null} >{playerSymbol}</button>{" "}
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;



