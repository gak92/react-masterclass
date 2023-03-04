import './PlayButton.css';
import React, { useState } from 'react';

const PlayButton = ({onPlay, onPause, children}) => {

  // don;t use this approach (props are read only)
  // let playing = false;

  const [playing, setPlaying] = useState(false);

  const handleClick = (e) => {
    // console.log(e);
    e.stopPropagation();

    if(playing) {
      onPause();
    }
    else {
      onPlay();
    }
    setPlaying(!playing);
  }

  return (
      <button onClick={handleClick}>
        {children} {playing? '⏸' : '▶'}
      </button>
  )
}

export default PlayButton