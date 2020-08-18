// Types
import { ReactNode } from 'react';
import { IElementsList, IElementOfList } from '../../modules/elementsList/types';

export interface IElementDescription {
  elementsList: IElementsList
  children: ({ ...props }: IElementOfList) => ReactNode
}
