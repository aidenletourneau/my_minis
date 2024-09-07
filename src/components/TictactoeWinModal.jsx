import { createPortal } from 'react-dom';

export default function TictactoeWinModal({showModal, setShowModal, winner}) {
  
  return (
    <>
      {showModal && createPortal(
        <div className="modal">
          <div className="modal-text">{winner}'s Win!</div>
          <button onClick={() => setShowModal(false)}>Close</button>
        </div>,
        document.body
      )}
    </>
  );
}