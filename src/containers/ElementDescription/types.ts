import { ReactNode } from 'react';
import { IElementOfList } from '../../redux/level-backup/types';
import { IAudioPlayer } from '../../components/AudioPlayer';

export interface IElementDescription {
  children: ({ ...props }: IElementOfList & IAudioPlayer) => ReactNode
}
