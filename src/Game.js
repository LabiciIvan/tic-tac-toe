import React from 'react';
import { useState } from 'react';

import './Game.css';
import Square from './components/Square';


const Game = () => {

  const [inactive, setInactive] = useState(
[   {
      id: 1,
      disabled: false,
      inner: '',
    },
    {
      id: 2,
      disabled: false,
      inner: '',
    },
    {
      id: 3,
      disabled: false,
      inner: '',
    },
    {
      id: 4,
      disabled: false,
      inner: '',
    },
    {
      id: 5,
      disabled: false,
      inner: '',
    },
    {
      id: 6,
      disabled: false,
      inner: '',
    },
    {
      id: 7,
      disabled: false,
      inner: '',
    },
    {
      id: 8,
      disabled: false,
      inner: '',
    },
    {
      id: 9,
      disabled: false,
      inner: '',
    }]
  )

  const [player, setPlayer] = useState('X');

  const [winCombination, setWinCombination] = useState(
    [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [6, 4, 2],
      [8, 4, 0],
      [6, 3, 0],
      [7, 4, 1],
      [8, 5, 2],
    ]
  );
    
  const handleSquare = (buttonValue) => {

    let squares = [...inactive];
    
    squares .map(square => {
      if(square.id === buttonValue) {
        
        square.disabled = true;
        square.inner = player;
        
      }
    });

    player === 'X' ? setPlayer('O') : setPlayer('X');
    
    setInactive(squares );
    checkWin();
  }

  const createSquares = () => {

    return inactive.map(item => {
      
      return <Square
       key={item.id}
        onClick={handleSquare}
         inactive={item.disabled}
          value={item.id}
            inner={item.inner}
          />
    })
  }

  const checkWin = () => {

    for (let i = 0; i < winCombination.length; ++i) {

      if(inactive[winCombination[i][0]].inner != '' && inactive[winCombination[i][1]].inner != '' && inactive[winCombination[i][2]].inner != '') {

        if ( inactive[winCombination[i][0]].inner === inactive[winCombination[i][1]].inner && inactive[winCombination[i][0]].inner === inactive[winCombination[i][2]].inner) {
          console.log('winner', player);
        }
      }
    }
  }

  return ( 
    <div className='game-map'>
      {createSquares()}
    </div>
   );
  }
  
  export default Game;

  