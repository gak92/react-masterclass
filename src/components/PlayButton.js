import './PlayButton.css';
import React from 'react';

const PlayButton = ({onPlay, onPause, children}) => {

  // don;t use this approach (props are read only)
  let playing = false;

  const handleClick = (e) => {
    console.log(e);
    e.stopPropagation();

    if(playing) {
      onPause();
    }
    else {
      onPlay();
    }
    playing = !playing;
  }

  return (
      <button onClick={handleClick}>
        {children}
      </button>
  )
}

export default PlayButton