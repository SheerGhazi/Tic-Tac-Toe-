import React from "react";
import { useState } from "react";

const Player = ({name,symbol}) => {
    const [isEditing, setisEditing] = useState(false)


  return (
    <>
      {" "}
      <li className="flex justify-around items-center  w-1/2">
        <span className="flex justify-between items-center space-x-6">
          <span className="text-lg font-semibold tracking-wider">{name}</span>
          <span>{symbol}</span>
        </span>
        <button className="font-medium text-base text-yellow-400 hover:text-yellow-700 cursor-pointer">
          Edit
        </button>
      </li>
    </>
  );
};

export default Player;
