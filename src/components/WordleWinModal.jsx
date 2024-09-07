import { createPortal } from 'react-dom';

export default function TictactoeWinModal({showModal, setShowModal, guesses, word}) {
  
  return (
    <>
      {showModal && createPortal(
        guesses < 5 ? 
        <div className="modal">
          <div style={{color: 'green'}} className="modal-text">You win in {guesses===1 ? "1 guess" : String(guesses)+" guesses"}</div>
          <button  className='game-button' onClick={() => setShowModal(false)}>Close</button>
        </div> 
        : 
        <div className="modal">
          <div style={{color: 'red'}} className="modal-text">You Lose, The word was {word}</div>
          <button className='game-button' onClick={() => setShowModal(false)}>Close</button>
        </div>,
        document.body
      )}
    </>
  );
}