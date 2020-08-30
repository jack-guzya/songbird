// React
import React, { createRef, RefObject, useEffect } from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
// Styles
import './style.scss';

export interface IAudioPlayer {
  audio?: string
  isPause: boolean
}

const AudioPlayer: React.FC<IAudioPlayer> = ({ audio, isPause }) => {
  const player: RefObject<ReactAudioPlayer> = createRef();

  useEffect(() => {
    if (!player.current.audio.current.paused) {
      player.current.audio.current.pause();
    }
  }, [isPause]);

  return (
    <ReactAudioPlayer
      src={audio}
      showJumpControls={false}
      customAdditionalControls={[]}
      layout="horizontal-reverse"
      ref={player}
      onAbort={() => player.current.audio.current.pause()}
    />
  );
};

export default AudioPlayer;
