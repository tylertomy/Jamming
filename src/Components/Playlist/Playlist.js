import React, {useCallback} from 'react';

import Tracklist from '../Tracklist/Tracklist';

function Playlist(props){
    const handleNameChange = useCallback(
        (event) => {
            props.onNameChange(event.target.value);
        },
        [props.onNameChange]
    );
    
    return(
        <div className='Playlist'>
            <input onChange={handleNameChange} defaultValue={"New Playlist"} />
            <Tracklist 
                tracks={props.playlistTracks}

            />
            <button className='Playlist-save' onClick={props.onSave}>
                SAVE TO SPOTIFY
            </button>
        </div>
    );
};

export default Playlist;