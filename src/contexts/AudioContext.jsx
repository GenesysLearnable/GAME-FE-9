// src/contexts/AudioContext.js
import React, { createContext, useContext, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorage";

const AudioContext = createContext();

const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useLocalStorageState(true, "musicContext");
  const [isPlayingAud, setIsPlayingAud] = useLocalStorageState(
    true,
    "musicAudioContext"
  );

  return (
    <AudioContext.Provider
      value={{ isPlaying, setIsPlaying, isPlayingAud, setIsPlayingAud }}
    >
      {children}
    </AudioContext.Provider>
  );
};

function useAudioPlayer() {
  const context = useContext(AudioContext);

  if (context === undefined) {
    throw new Error("AudioContext was used outside of AudioContextProvider");
  }

  return context;
}

export { AudioProvider, useAudioPlayer };
