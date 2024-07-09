import React from 'react';
import classNames from 'classnames';
import './ResultModal.css';

export const ResultModal = (props) => {

  const resultModalClasses = classNames({
    'modal-open': props.isgameOver
  });

  const winner = props.winner ? `Winner is ${props.winner}.`:`it is a tie.`;

  return (
    <div >
        <div id="modal-overlay" className={resultModalClasses} >
        <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                    <span>{winner}</span>
                </div>
            </div>
            <div id="new-game-container">
                <button id="new-game-button"
                        onClick={props.newgameClick}>Start New Game</button>
            </div>
        </div>
      </div>
    </div>
  );
}
