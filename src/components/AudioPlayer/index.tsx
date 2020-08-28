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
    if (isPause) {
      player.current.audio.current.pause();
    }
  });

  return (
    <ReactAudioPlayer
      src={audio}
      showJumpControls={false}
      customAdditionalControls={[]}
      autoPlayAfterSrcChange={false}
      layout="horizontal-reverse"
      ref={player}
    />
  );
};

export default AudioPlayer;
