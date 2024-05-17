import React, { useState, useRef }  from 'react'
import { Switch } from 'antd'
import Sound from './Sound.mp3'
function GameSound() {

    const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className='Toggle'>
        {/* {isPlaying ? 'Pause' : 'Play'} */}
         <audio ref={audioRef} src={Sound} />
        <Switch onClick={togglePlayPause}
        />
    </div>
  )
}

export default GameSound