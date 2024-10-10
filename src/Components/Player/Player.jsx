import React from "react";
import { useState } from "react";

const Player = ({initialName,symbol, isActive}) => {
    const [isEditing, setisEditing] = useState(false)
    const [playerName, setplayerName] = useState(initialName)

        const handleEditClick = ()=>{
            setisEditing((prevState)=>!prevState)
            // setisEditing(!isEditing)
        };

        const handleChange = (event) =>{
                // console.log(event);
                setplayerName(event.target.value);

        }

        let editablePlayerName = <span className="text-lg font-semibold tracking-wider">{playerName}</span>;

        if(isEditing  ){
            editablePlayerName = <input className="bg-gray-600" type="text" defaultValue={playerName} onChange= {handleChange} />

        }


  return (
    <>
      {" "}
      <li className={`flex justify-around items-center w-1/2 ${isActive ? 'active' : ''}`}>
        <span className="flex justify-between items-center space-x-6">
          {editablePlayerName}
          <span>{symbol}</span>
        </span>
        <button
        className="font-medium text-base text-yellow-400 hover:text-yellow-700 cursor-pointer"
        onClick={handleEditClick}
        >
           {isEditing ? "Save":"Edit"}
        </button>
      </li>
    </>
  );
};

export default Player;
