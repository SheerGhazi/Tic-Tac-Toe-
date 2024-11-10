import { useState } from "react";
import React from "react";
import Player from "../Components/Player/Player";
import Tic_Tac from "../assets/game-logo.png";
import GameBoard from "../Components/GameBoard/GameBoard";
import Log from "../Components/Log/Log";
import { WINNING_COMBINATIONS } from "../Components/WinningCombination/winning-combination";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];



function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

const Home = () => {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false)
  // const [activePlayer, setActivePlayer] = useState('X');

  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = initialBoard;
  for(const turn of gameTurns){
    const { square, player} = turn;
    const { row,col} =square;

    gameBoard [row] [col] = player;
  }

  for ( const  combination of WINNING_COMBINATIONS ){
    const firstSquareSymbol
    const secondSquareSymbol
    const thirdSquareSymbol
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((curActivePlayer)=> curActivePlayer === 'X' ? 'O' : 'X' )
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <div className="w-full min-h-screen bg-custom-gradient ">
      <div className=" flex flex-col justify-center items-center py-12">
        <img className="size-24" src={Tic_Tac} alt="" />
        <h1
          className="font-bold text-lg text-white
        "
        >
          Tic Tac Toe
        </h1>
      </div>

      <main>
        <div className="game-container container mx-auto w-1/2 bg-gray-900 text-white p-6 rounded-xl ">
          <ol className="flex justify-between  ">
            <Player
              initialName="Player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            />
            <Player
              initialName="Player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </div>
        <Log turns={gameTurns} />
      </main>
    </div>
  );
};

export default Home;
