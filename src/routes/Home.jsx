import { Link } from "react-router-dom"

export default function Home() {


  return (
    <div className="home-page">
      <h1>My Mini Games!!</h1>
      <div className="game-buttons">
        <Link to={'/tiktaktoe'}><button className="game-button">Tic Tac Toe</button></Link>
        <Link to={'/wordle'}><button className="game-button">Wordle</button></Link>
        <Link to={'/Matching'}><button className="game-button">Matching</button></Link>
      </div>
    </div>
    
  )
}