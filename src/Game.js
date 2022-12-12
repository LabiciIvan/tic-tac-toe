import React from 'react';
import { useState } from 'react';

import Square from './components/Square';
import {squaresArray, gameWinCombination} from './game-settings';
import { annotate } from 'rough-notation';


const Game = () => {
  
  const [squares, setSquares] = useState(squaresArray)

  const [winCombination, setWinCombination] = useState(gameWinCombination);

  const [player, setPlayer] = useState('X');

  const [winner, setWinner] = useState('');

  const [playing, setPlaying] = useState(true);

  const [moves, setMoves] = useState(9);
  
  const handleClickedSquare = (squareId) => {

    let squaresState = [...squares];
    
    squaresState.map(square => {

      if(square.id === squareId) {
        
        square.disabled = true;
        square.inner = player;

        runAnimantion(square.id);
      }
    });

    player === 'X' ? setPlayer('O') : setPlayer('X');
    
    setSquares(squaresState);

    checkGameState();
  }

  const startGame = () => {

    return squares.map(square => {
      
      return <Square
       key={square.id}
        onClick={handleClickedSquare}
         inactive={square.disabled}
          value={square.id}
            inner={square.inner}
          />
    })
  }

  const checkGameState = () => {
    let existEmptySquares = false;

    for (let i = 0; i < winCombination.length; ++i) {

      if(squares[winCombination[i][0]].inner != '' && squares[winCombination[i][1]].inner != '' && squares[winCombination[i][2]].inner != '') {

        if ( squares[winCombination[i][0]].inner === squares[winCombination[i][1]].inner && squares[winCombination[i][0]].inner === squares[winCombination[i][2]].inner) {
          stopGame(false);
          return;
        }
      }
    }

    squares.map(square => {

      if (square.disabled === false ) {
        existEmptySquares = true;
      }
    });

    if (!existEmptySquares === true) {
      stopGame(true);
      return;
    }
  }
  
  const stopGame = (isDraw) => {

    let squaresState = [...squares];

    squaresState.map(square => {
      
      square.disabled = true;
    });

    setSquares(squaresState);
    isDraw ? setWinner('It\'s a draw .') : setWinner(`Winner : ${player} `);
    setPlaying(false);
  }

  const restartGame = () => {

    return <button className='restart-btn' onClick={() => reloadWindow()} ><i className="bi bi-arrow-repeat"></i></button>;
  }

  
  const reloadWindow = () => {
    return window.location.reload();
  }

  const runAnimantion = (squareValue) => {

    let square = document.querySelector(`[value="${squareValue}"]`); 

    const annotation = player === 'X' ? annotate(square, {type: 'crossed-off', strokeWidth: '2px', animationDuration: 400, color: 'gray'}) : annotate(square, {type: 'circle', strokeWidth: '2px', animationDuration: 400, color: 'gray'});
    annotation.show();
  }

  return (

    <React.Fragment>
      <div className='winner'>{winner}</div>
      <div className='squares'>
        <div className='column-map'></div>
        <div className='row-map'></div>
        { startGame() }
      </div>
      <div className='restart-window' >{!playing == true ? restartGame() : ''}</div>
    </React.Fragment>
    
    );
  }
  
  export default Game;