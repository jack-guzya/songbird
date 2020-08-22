import { ReactNode } from 'react';
import { IElementOfList } from '../../modules/elementsList/types';
import { IAudioPlayer } from '../../components/AudioPlayer';

export interface IElementDescription {
  children: ({ ...props }: IElementOfList & IAudioPlayer) => ReactNode
}
