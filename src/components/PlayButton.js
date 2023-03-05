import './PlayButton.css';
import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

const PlayButton = ({onPlay, onPause, children}) => {

  // don;t use this approach (props are read only)
  // let playing = false;

  const [playing, setPlaying] = useState(false);
  const theme = useContext(ThemeContext);

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
      <button onClick={handleClick} className={theme}>
        {children} {playing? '⏸' : '▶'}
      </button>
  )
}

export default PlayButton