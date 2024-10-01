import React from 'react'
import Player from '../Components/Player/Player'
import Tic_Tac from "../assets/game-logo.png"

const Home = () => {
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
          <ol className="flex justify-between ">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          Game Board
        </div>
        Log
      </main>
    </div>
  )
}

export default Home
