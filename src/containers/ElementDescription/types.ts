// Types
import { ReactNode } from 'react';
import { IElementsList, IElementOfList } from '../../modules/elementsList/types';
import { IAudioPlayer } from '../../components/AudioPlayer/types';

export interface IElementDescription {
  elementsList: IElementsList
  children: ({ ...props }: IElementOfList & IAudioPlayer) => ReactNode
}
