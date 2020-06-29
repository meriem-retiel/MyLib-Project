import React from 'react';
import './Compose.css';

export default function Compose(props) {
    return (
      <div className="compose">
        <input
          type="text"
          className="compose-input"
          placeholder="Répondre a message, @nom"
          style={{backgroundColor:'#E8E8E8' , color:'	#000000'}}
        />

        {
          props.rightItems
        }
      </div>
    );
}