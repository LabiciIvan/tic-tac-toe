import React from 'react';
import { useState } from 'react';

import Square from './components/Square';
import {squaresArray, gameWinCombination} from './game-settings';


const Game = () => {
  
  const [squares, setSquares] = useState(squaresArray)

  const [winCombination, setWinCombination] = useState(gameWinCombination);

  const [player, setPlayer] = useState('X');

  const [winner, setWinner] = useState('');

  const [playing, setPlaying] = useState(true);
  
  const handleClickedSquare = (squareId) => {

    let squaresState = [...squares];
    
    squaresState.map(square => {

      if(square.id === squareId) {
        
        square.disabled = true;
        square.inner = player;
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
          stopGame(player);
        }
      }
    }

    squares.map(square => {

      if (square.disabled === false ) {
        existEmptySquares = true;
      }
    });

    if (!existEmptySquares === true) {
      stopGame();
    }
  }
  
  const stopGame = (player) => {
    
    let squaresState = [...squares];

    squaresState.map(square => {
      
      square.disabled = true;
    });

    setSquares(squaresState);
    player ? setWinner(`Winner : ${player}`) : setWinner('It\'s a draw.');
    setPlaying(false);
  }

  const restartGame = () => {

    return <button onClick={() => reloadWindow()} ><i className="bi bi-arrow-repeat"></i></button>;
  }

  
  const reloadWindow = () => {
    return window.location.reload();
  }

  return (

    <React.Fragment>
      <div className='winner'>{winner}</div>
      <div className='squares'>
        { startGame() }
      </div>
      <div className='turn' >{!playing == true ? restartGame() : ''}</div>
    </React.Fragment>
    
    );
  }
  
  export default Game;