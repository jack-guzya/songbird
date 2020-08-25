import { ReactNode } from 'react';
import { TIndex } from '../../redux/reducers/level/types';

interface IChildrenArgs<T> {
  data: T
  show: boolean
  indexOfQuestion: TIndex
}
export interface IQuestionBlock<T> {
  children: ({ show, data, indexOfQuestion }: IChildrenArgs<T>) => ReactNode
}
