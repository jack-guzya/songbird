import { ReactNode } from 'react';
import { IElementImage } from '../../components/ElementImage/types';
import { IElementName } from '../../components/ElementName/types';
import { IAudioPlayer } from '../../components/AudioPlayer/types';

export interface IQuestion extends IElementImage, IElementName, IAudioPlayer { }

export type CurrentQuestionType = number | null

export interface IQuestionState {
  data: IQuestion,
  current: CurrentQuestionType
}

export interface IQuestionBlock {
  question: {
    current: CurrentQuestionType,
    data: IQuestion
  }
  children: (data: IQuestion) => ReactNode
}
