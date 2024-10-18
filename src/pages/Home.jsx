import { useState } from 'react'
import React from 'react'
import Player from '../Components/Player/Player'
import Tic_Tac from "../assets/game-logo.png"
import GameBoard from '../Components/GameBoard/GameBoard'
import Log from '../Components/Log/Log'

const Home = () => {
   const [gameTurn, setGameTurn] =  useState([]);
  const [activePlayer, setActivePlayer] = useState("X")

  function handleSelectSquare(rowIndex,colIndex){
      setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X" )
      setGameTurn((prevTurns) => {

        let currentPlayer = "X";
        if (prevTurns.length>0 &&  prevTurns[0].player === 'X'){
          currentPlayer = 'O';
        }


        const updatedTurns = [{row: rowIndex , col: colIndex, player: currentPlayer},...prevTurns];

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
            <Player   initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player initialName="Player 2" symbol="O"  isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard  onSelectSquare={handleSelectSquare} turns={gameTurn} />
        </div>
       <Log/>
        
      </main>
    </div>
  )
}

export default Home
