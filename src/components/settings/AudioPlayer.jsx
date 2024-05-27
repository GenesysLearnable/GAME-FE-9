// src/components/AudioPlayer.js
import React, { useEffect, useRef, useState } from "react";
import { useAudioPlayer } from "../../contexts/AudioContext";

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const { isPlaying } = useAudioPlayer();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio ref={audioRef} loop>
      <source src="/audio/Music.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default AudioPlayer;
