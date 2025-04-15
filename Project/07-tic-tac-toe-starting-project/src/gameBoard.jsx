import { useState } from "react"

const initialGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard({ onSelectBox, activePlayerSymbol}){
    const [gameBoard, setGameBoard ] = useState(initialGame);
    function handleBoxChange(rowIndex, colIndex){
        setGameBoard((preGameBoard)=>{
            const updateGameBoard = [...preGameBoard.map(innerArray =>[...innerArray])];
            updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updateGameBoard;
        })
        onSelectBox();
    }
    return(
        <ol id="game-board">
            {gameBoard.map((row, rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={()=>handleBoxChange(rowIndex, colIndex)}>{playerSymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>))}
        </ol>
    )
}
