import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import BGM from '../assets/audio/swell.mp3';

const AudioContext = createContext();

let audioInstance = null;
const getAudioInstance = () => {
  if (!audioInstance) {
    audioInstance = new Audio(BGM);
    audioInstance.loop = true;
    audioInstance.volume = 0.5;
    audioInstance.play();  // Start playing immediately when instance is created
  }
  return audioInstance;
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(getAudioInstance());
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        audio.pause();
      } else if (isPlaying) {
        audio.play();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const setVolume = (value) => {
    const volume = Math.max(0, Math.min(1, value));
    audioRef.current.volume = volume;
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay, setVolume }}>
      {children}
    </AudioContext.Provider>
  );
};