import React, { useContext } from 'react';
import { PlayerContext } from './playerContext';

function Filters({ onChangePosition }) {
    const [players, setPlayers] = useContext(PlayerContext);

    function handleSelect(e) {
        e.preventDefault();
        const selectedPosition = e.target.value
        if (e.target.value !== 'All') {
            const filteredPlayers = players.filter(player => (
                selectedPosition.substring(0, selectedPosition.length - 1) === player.position
            ))
            onChangePosition(filteredPlayers)
        }
    }

    return (
        <div>
            <h3>Position</h3>
            <div>
                <select onChange={handleSelect} >
                    <option value='All'>All</option>
                    <option value='Forwards'>Forwards</option>
                    <option value='Midfielders'>Midfielders</option>
                    <option value='Defenders'>Defenders</option>
                    <option value='Goalkeepers'>Goalkeepers</option>
                </select>
            </div>
        </div>
    )
}

export default Filters;