import { useEffect, useState } from 'react'
import {Link } from 'react-router-dom'
import { wordleWords } from './wordleWords'
import WordleWinModal from '../components/WordleWinModal'

export default function Wordle(){

  const [showModal, setShowModal] = useState(false)
  const [word, setWord] = useState(wordleWords[Math.floor(Math.random() * (1175+1))])
  const keyboardLetters1 = 'QWERTYUIOP'.split('')
  const keyboardLetters2 = 'ASDFGHJKL'.split('')
  const keyboardLetters3 = 'ZXCVBNM'.split('')
  const [currentRow, setCurrentRow] = useState(0)
  const [board, setBoard] = useState([
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
  ])

  function handleButtonClick(e) {
    for(let i = 0; i < 5; i++){
      if(board[currentRow][i] !== ' '){
        continue
      }
      let newBoard = board.map(row => [...row])
      newBoard[currentRow][i] = e.currentTarget.innerText
      setBoard(newBoard)
    }
  }

  function handleDeleteClick(e) {
    for(let i = 4; i > -1; i--){
      if(board[currentRow][i] === ' '){
        continue
      }
      let newBoard = board.map(row => [...row])
      newBoard[currentRow][i] = ' ';
      setBoard(newBoard)
    }
  }

  function handleEnterClick(){
    const guess = board[currentRow][4] + board[currentRow][3] + board[currentRow][2] + board[currentRow][1] + board[currentRow][0]
    if (guess.length < 5){
      return
    }
    for(let i = 0; i < 5; i++){
      const cell = document.getElementById(String(currentRow)+String(4-i))
      cell.style.color = 'white'
      if (guess[i] === word[i]){
        cell.style.backgroundColor = 'rgb(37, 90, 37)';
        cell.style.borderColor = 'rgb(37, 90, 37)';
      }
      else if (word.includes(guess[i])) {
        cell.style.backgroundColor = 'rgb(145, 148, 41)';
        cell.style.borderColor = 'rgb(145, 148, 41)';
      }
      else{
        cell.style.backgroundColor = 'gray';
        cell.style.borderColor = 'gray';
        document.getElementById(guess[i]).disabled = true
      }
    }
    if (guess === word || currentRow === 5){
      setShowModal(true)
      return
    }
    setCurrentRow(currentRow+1)
  }


  return (
    <div className="wordle-page">
      <h1>Wordle</h1>
      <WordleWinModal showModal={showModal} setShowModal={setShowModal} guesses={currentRow+1} word={word}/>
      <div className="wordle-game">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="wordle-row">
            {row.map((cell, colIndex) => (
              <div id={String(rowIndex)+String(colIndex)} key={String(rowIndex)+String(colIndex)} className="cell">{board[rowIndex][colIndex]}</div>
            ))}
          </div>)
        )}
      </div>
      <div className="letter-choices">
        <div className="keyboard-letter-row">
        {keyboardLetters1.map(letter => (
          <button  id={letter} onClick={handleButtonClick} key={letter} className="wordle-keyboard-button">{letter}</button>
        ))}
        </div>
        <div className="keyboard-letter-row">
        {keyboardLetters2.map(letter => (
          <button  id={letter} onClick={handleButtonClick} key={letter}  className="wordle-keyboard-button">{letter}</button>
        ))}
        </div>
        <div className="keyboard-letter-row">
          <button onClick={handleEnterClick} className="wordle-keyboard-button">Enter</button>
        {keyboardLetters3.map(letter => (
          <button  id={letter} onClick={handleButtonClick} key={letter} className="wordle-keyboard-button">{letter}</button>
        ))}
          <button onClick={handleDeleteClick} className="wordle-keyboard-button">Delete</button>
        </div>
      
      </div>
      <Link to={'/'}><button className="game-button">Back</button></Link>
    </div>
  )
}