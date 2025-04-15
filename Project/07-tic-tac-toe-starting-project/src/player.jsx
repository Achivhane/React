import { useState } from "react"

export default function Player({name, symbol, isActive}){
const [isEditing, setIsEditing]= useState(false);
const [playerName, setPlayerName]= useState(name);

function buttonClick(){
    setIsEditing(!isEditing);
}
function handleChange(event){
setPlayerName(event.target.value)
}
let editPlayerName= <span className="player-name">{playerName}</span>;
let buttonName = "Edit";
if(isEditing){
    editPlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    buttonName = "Save";
}
return(
    <li className={isActive ? 'active' : undefined}>
          <span className="player">
          {editPlayerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={buttonClick}>{buttonName}</button>
        </li>
)
}