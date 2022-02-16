import React, { useState, useEffect, useContext } from 'react';
import NewPlayerButton from './NewPlayerButton';
import NewPlayerForm from './NewPlayerForm';
import Player from './Player';
import Filters from './Filters';
import { PlayerContext } from './playerContext';

function Players() {
    const [players, setPlayers] = useContext(PlayerContext);
    const [filters, setFilters] = useState('All');

    useEffect(() => {
        fetch('http://localhost:3000/players')
        .then(r => r.json())
        .then(data => setPlayers(data))
    }, []);

    const playersDisplayed = players.map(player => (
        <Player key={player.id} player={player} />
    ));

    function handleChangePosition(position) {
        setFilters(position)
    }

    return (
        <div>
                <hr/>
                <NewPlayerButton />
                <hr/>
                <Filters onChangePosition={handleChangePosition} />
            <ul className='cards'>
                {playersDisplayed}
            </ul>
        </div>
    )
}

export default Players;