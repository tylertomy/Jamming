import React from 'react';
import Track from '../Track/Track';

function Tracklist(props) {
    if (!props.tracks || props.tracks.length === 0) {
        return <div>No tracks to display</div>;
      };
      
    return (
        <div className="Tracklist">
            {props.tracks.map((track) => {
                return (
                    <Track
                        track={track}
                        key={track.id} 
                        onAdd={track.id}
                        isRemoval={props.isRemoval}
                        onRemove={props.onRemove}
                        />
                );
            })}
        </div>
    );
};

export default Tracklist;