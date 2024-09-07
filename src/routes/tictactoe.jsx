import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import { createPortal } from 'react-dom';
import TictactoeWinModal from '../components/TictactoeWinModal'

let turn = 'X';
export default function Tictactoe() {
  
  const [showModal, setShowModal] = useState(false)
  
  const [board, setBoard]  = useState([
    ['','',''],
    ['','',''],
    ['','',''],
  ])

  function checkWin() {
    for (let row of board) {
      if (row[0] !== '' && row[0] === row[1] && row[1] === row[2]) {
        return true;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true;
      }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true;
    }
    if (board[2][0] !== '' && board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
      return true;
    }
    return false;
  }

  function handleClick (e) {
    if(board[e.currentTarget.parentNode.id][e.currentTarget.id] !== ''){
      return
    }
    let newBoard = board.map(row => [...row])
    newBoard[e.currentTarget.parentNode.id][e.currentTarget.id] = turn;
    setBoard(newBoard);
    
    if (turn === 'X'){
      turn = 'O'
    } else{
      turn = 'X'
    }
  }

  useEffect(() => {
    if(checkWin()){
      setShowModal(true)
    }
  }, [board])

  function handleReset(){
    setBoard([
      ['','',''],
      ['','',''],
      ['','',''],
    ])
  }

  return (
    <div className="tictactoe-page">
      <h1>Tic Tac Toe</h1>
      <TictactoeWinModal showModal={showModal} setShowModal={setShowModal} winner={turn === 'X' ? 'O' : 'X'}/>
      <div>
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