import React, { useState, useRef }  from 'react'
import { Switch } from 'antd'
import Music from './Music.mp3'
function GameMusic() {

    const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleEnded = () => {
    audioRef.current.play();
  };

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
      
            <audio id='audio' ref={audioRef} src={Music}
            onEnded={handleEnded}
            autoPlay
            />
        <Switch onClick={togglePlayPause}
        />
    </div>
  )
}

export default GameMusic