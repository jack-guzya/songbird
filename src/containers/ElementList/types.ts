import { TList, TIndex } from '../../redux/reducers/level/types';

export type HandleClickType = (e: React.MouseEvent<HTMLElement>) => void

export interface IElementsListProps<T> {
  elementsList: TList<T>,
  setSelection?: (selected: TIndex) => object,
}
