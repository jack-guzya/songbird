import { IElementOfList } from '../../components/ElementOfList/types';

export type CurrentElementType = number | null

export type ElementsListType = Array<IElementOfList> | null

export type HandleClickType = (e: React.MouseEvent<HTMLElement>) => void
export interface IElementsList {
  elementsList: ElementsListType,
  showDescription?: (current: CurrentElementType) => object,
}
