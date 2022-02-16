import React, { createContext, useState } from 'react';

const PlayerContext = createContext();

function PlayerProvider({ children }) {
    const [players, setPlayers] = useState([])

    const value = [players, setPlayers]

    return (
        <PlayerContext.Provider value={value}>
            {children}
        </PlayerContext.Provider>
    )
}

export { PlayerContext, PlayerProvider }