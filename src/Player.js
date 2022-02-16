import React from 'react';

function Player({ player }) {
    const { id, name, image, position } = player;

    return (
        <li className='card'>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <h4>{position}</h4>
            <button>Add to team</button>
        </li>
    )
}

export default Player;