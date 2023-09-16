'use client'

import React, { useEffect, useRef } from 'react';

export default function Music(){

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    const playAudio = () => {
      if (audio) {
        audio.loop = true;
        audio.play();
        document.removeEventListener('click', playAudio);
      }
    }

    document.addEventListener('click', playAudio);

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audioRef]);

    return <audio ref={audioRef} src="/music.mp3" />
}