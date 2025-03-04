import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/finishedGame.css";

const FinishedGame = ({ won, secretWord, reloadPage }) => {
  
  const navigate = useNavigate();

  return (
    <div className="modal">
      {won ? (
        <h2 className="congrats">Congrats! You won. Up to another session?</h2>
      ) : (
        <div>
          <h2 className="congrats">Sorry! You lost, but you can always try again!</h2>
          <p>The secret word was: {secretWord.toUpperCase()}</p>
        </div>
      )}
      <div className="modal-buttons">
        <button className="restart-button" onClick={reloadPage}>Restart</button>
        <button className="back-button" onClick={() => navigate("/")}>Go home</button>
      </div>
    </div>
  );
};

export default FinishedGame;