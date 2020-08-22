// React
import React from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
// Styles
import './style.scss';

export interface IAudioPlayer {
  audio?: string
}

const AudioPlayer: React.FC<IAudioPlayer> = ({ audio }) => (
  <ReactAudioPlayer
    src={audio}
    showJumpControls={false}
    customAdditionalControls={[]}
    autoPlayAfterSrcChange={false}
  />
);

export default AudioPlayer;
