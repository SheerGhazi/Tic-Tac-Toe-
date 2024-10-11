import { useState } from 'react'
import React from 'react'
import Player from '../Components/Player/Player'
import Tic_Tac from "../assets/game-logo.png"
import GameBoard from '../Components/GameBoard/GameBoard'

const Home = () => {
  const [activePlayer, setActivePlayer] = useState("X")

  function handleSelectSquare(){
      setActivePlayer((curActivePlayer)=> curActivePlayer === "X" ? "O" : "X" )
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

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem provident a soluta reprehenderit maxime voluptas mollitia, quae, voluptatem doloremque magni repellendus? Inventore exercitationem explicabo necessitatibus distinctio, ratione deleniti fuga? Quaerat?</p>
      </div>

      <main>
        <div className="game-container container mx-auto w-1/2 bg-gray-900 text-white p-6 rounded-xl ">
          <ol className="flex justify-between  ">
            <Player  initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
            <Player initialName="Player 2" symbol="O"  isActive={activePlayer === 'O'} />
          </ol>
          <GameBoard  onSelectSquare={handleSelectSquare} />
        </div>
        Log
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui maiores vitae sunt repellat eligendi explicabo harum, impedit, autem labore ipsa repellendus. Corrupti, ullam! Ad, vero veritatis. Nemo cum facilis ab?</p>
      </main>
    </div>
  )
}

export default Home
