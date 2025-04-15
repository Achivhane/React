import Player from "./player";
import  GameBoard from './gameBoard'
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer]= useState('X')

  function handleSelectBox(){
    setActivePlayer((curActivePlayer)=>curActivePlayer === 'X' ? 'O':'X')
  }
  return (
    <main id="game-container">
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="player1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player name="player2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard onSelectBox={handleSelectBox} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  )
}

export default App
