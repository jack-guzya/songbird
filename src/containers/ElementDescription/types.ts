import { ReactNode } from 'react';
import { TIndex } from '../../redux/level/types';

interface IChildrenArgs<T> {
  data: T
  indexOfSelection: TIndex
}
export interface IElementDescription<T> {
  children: ({ data, indexOfSelection }: IChildrenArgs<T>) => ReactNode
}
