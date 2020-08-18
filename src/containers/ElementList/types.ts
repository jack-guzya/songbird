import { IElementsList, SelectedType } from '../../modules/elementsList/types';

export type HandleClickType = (e: React.MouseEvent<HTMLElement>) => void
export interface IElementsListProps {
  elementsList: IElementsList,
  showDescription?: (selected: SelectedType) => object,
}
