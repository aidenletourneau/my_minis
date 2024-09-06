import { Link } from "react-router-dom"

export default function Home() {


  return (
    <div className="home-page">
      <h1>My Mini Games!!</h1>
      <div className="game-buttons">
        <Link to={'/tiktaktoe'}><button className="game-button">Tik-Tak-Toe</button></Link>
      </div>
    </div>
    
  )
}