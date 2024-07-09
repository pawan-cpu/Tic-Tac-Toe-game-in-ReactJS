import React,{useState} from 'react';
import { calculateWinner } from '../../utils/calculteWinner';
import { Board } from '../Board/Board';
import { ResultModal } from '../ResultModal/ResultModal';
import './Game.css';

export const Game = () => {

  const [cellValues,setcellValues] = useState(['','','','','','','','','']);
  const [xisNext,setxisNext] = useState(true);
  const [isgameOver,setisgameOver] = useState(false);
  const [winner,setWinner] = useState();
  const [numberofTurnsLeft,setnumberofTurnsLeft] = useState(9);
  const [winningCombination,setwinningCombination] = useState([]);

  const iscellEmpty = (cellIndex) => cellValues[cellIndex] === '';

  const restartGame = () => {
      setcellValues(['','','','','','','','','']);
      setxisNext(true);
      setisgameOver(false);
      setnumberofTurnsLeft(9);
      setWinner();
      setwinningCombination([]);
  };

  const oncellClicked = (cellIndex) =>{

    if(iscellEmpty(cellIndex)){
      const newcellValues = [...cellValues];
      newcellValues[cellIndex] = xisNext ? 'X':'O';
      const newnumberofTurnsLeft = numberofTurnsLeft - 1;

      const calcResult = calculateWinner(newcellValues,newnumberofTurnsLeft,cellIndex);

      setcellValues(newcellValues);
      setxisNext(!xisNext);
      setisgameOver(calcResult.hasResult);
      setnumberofTurnsLeft(newnumberofTurnsLeft);
      setWinner(calcResult.winner);
      setwinningCombination(calcResult.winningCombination);
    }
  };

  return (
    <>        
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board cellValues={cellValues} 
               winningCombination={winningCombination}
               cellClicked={oncellClicked}  />
      </div>
      <ResultModal isgameOver={isgameOver}
                   winner={winner}
                   newgameClick={restartGame}/>

    </>
  );
}
