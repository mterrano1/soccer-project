import React, { useState, useContext } from 'react';
import { PlayerContext } from './playerContext';

function NewPlayerForm() {
    const [players, setPlayers] = useContext(PlayerContext);
    const [newName, setNewName] = useState('');
    const [newImage, setNewImage] = useState('');
    const [newPosition, setNewPosition] = useState('All');

    function handleSelect(e) {
        setNewPosition(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: newName,
                image: newImage,
                position: newPosition
            }),
        })
        .then(r => r.json())
        .then(newPlayer => {
            const updatedPlayers = [...players, newPlayer]
            setPlayers(updatedPlayers)
        })
    }

    return (
        <div className='newPlayerForm'>
            <h2>New Player</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='name'
                    placeholder='Player last name'
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                />
                <input
                    type='text'
                    name='name'
                    placeholder='Image Url'
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)} 
                />
                <select onChange={handleSelect} >
                    <option value='Forward'>Forward</option>
                    <option value='Midfielder'>Midfielder</option>
                    <option value='Defender'>Defender</option>
                    <option value='Goalkeeper'>Goalkeeper</option>
                </select>
                    <button type='submit'>Add Player</button>
            </form>
        </div>
    )
}

export default NewPlayerForm;