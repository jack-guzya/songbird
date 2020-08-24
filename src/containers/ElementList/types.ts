import { IState, IndexType } from '../../redux/level-backup/types';

export type HandleClickType = (e: React.MouseEvent<HTMLElement>) => void

export interface IElementsListProps {
  elementsList: IState,
  setSelection?: (selected: IndexType) => object,
}
