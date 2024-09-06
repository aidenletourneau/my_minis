import { Link } from "react-router-dom"
import {useState} from 'react'

let turn = 'X';
export default function Tictactoe() {
  const [board, setBoard]  = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])


  function chechWin() {
      if((board[0][0] === board[0][1] === board[0][2]) || 
         (board[1][0] === board[1][1] === board[1][2])
         (board[2][0] === board[2][1] === board[2][2])
         (board[0][0] === board[1][0] === board[2][0])
         (board[0][1] === board[1][1] === board[2][1])
         (board[0][2] === board[1][2] === board[2][2])
         (board[0][0] === board[1][1] === board[2][2])
         (board[0][2] === board[1][1] === board[2][0])){
        return true;
      }
      return false
  }

  function handleClick (e) {
    let newBoard = board.map(row => [...row])
    newBoard[e.currentTarget.parentNode.id][e.currentTarget.id] = turn;
    setBoard(newBoard);
    if (turn === 'X'){
      turn = 'O'
    } else{
      turn = 'X'
    }
    if(chechWin){
      console.log("winner!")
    }
  }

  function handleReset(){
    setBoard([
      ['','',''],
      ['','',''],
      ['','',''],
    ])
  }
  return (
    <div className="tiktaktoe-page">
      <h1>Tic Tac Toe</h1>
      <div className="game">
        {board.map((row, index) => (
          <div id={index} key={index} className="column">
            {row.map((cell, index) => (
              <a id={index} key={String(index)+String(index)} onClick={handleClick}><div className="cell">{cell}</div></a>
            ))}
          </div>
        ))}
      </div>
      <div className="buttons">
        <button onClick={handleReset} className="game-button">Reset</button>
        <Link to={'/'}><button className="game-button">Back</button></Link>
      </div>

    </div>  
  )
}