import { createPortal } from 'react-dom';

export default function TictactoeWinModal({showModal, setShowModal, guesses}) {
  
  return (
    <>
      {showModal && createPortal(
        <div className="modal">
          <div className="modal-text">You win in {guesses===1 ? "1 guess" : String(guesses)+" guesses"}</div>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>,
        document.body
      )}
    </>
  );
}