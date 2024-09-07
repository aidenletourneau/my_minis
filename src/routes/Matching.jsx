import {Link} from 'react-router-dom'

export default function Matching(){

  return (
    <div className="wordle-page">
      <h1>Matching</h1>
      <div className='matching-page'>


        
      </div>
      <Link to={'/'}><button className="game-button">Back</button></Link>
    </div>
  )
}