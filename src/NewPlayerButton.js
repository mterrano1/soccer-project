import React from 'react';
import { Link } from 'react-router-dom';

function NewPlayerButton() {
    return (
        <div>
                      
            <Link to={'/players/new'}>
                <button>Add new player</button>
            </Link>
        </div>
    )
}

export default NewPlayerButton;