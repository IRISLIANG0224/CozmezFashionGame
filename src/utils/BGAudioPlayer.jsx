import  { useState, useEffect } from 'react';

const BackgroundMusic = ({ src,start }) => {
  const [audio] = useState(new Audio(src));

  useEffect(() => {
    if (start) {
      audio.loop = true;
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [audio, start]);

  return null;
};

export default BackgroundMusic;