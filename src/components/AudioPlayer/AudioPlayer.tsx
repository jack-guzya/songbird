// React
import React from 'react';
import ReactAudioPlayer from 'react-h5-audio-player';
import './AudioPlayer.scss';
// Types
import { IAudioPlayer } from './types';

const AudioPlayer: React.FC<IAudioPlayer> = ({ src }) => (
  <ReactAudioPlayer
    src={src}
    showJumpControls={false}
    customAdditionalControls={[]}
  />
);

export default AudioPlayer;
