import React from 'react';

const GameOver = ({ winner, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white p-8 rounded-xl shadow-2xl max-w-md mx-auto mt-12">
      <h2 className="text-3xl font-extrabold mb-6 text-yellow-400">Game Over!</h2>
      
      {winner ? (
        <p className="text-xl mb-6">
          <span className="font-bold text-green-400">{winner}</span> Won!
        </p>
      ) : (
        <p className="text-xl mb-6">
          <span className="font-bold text-red-400">It's a draw!</span>
        </p>
      )}

      <button
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50" onClick={onRestart}
      >
        Rematch!
      </button>
    </div>
  );
};

export default GameOver;
