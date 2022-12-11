import React from 'react';
import "../css/square.css"


const Square = (props) => { 
    return (
    <button
     className={'square ' + props.value}
      onClick={() => props.onClick(props.value)}
       disabled={props.inactive}
        value={props.value}>
             {props.inner}
    </button>
    );
}

export default Square;