import { DataType } from '../../data/types';
import { ICategoryList } from '../CategoryList/types';
import { IElementOfList } from '../../components/ElementOfList/types';

export type CurrentElementType = number | null

export type ElementsListType = Array<IElementOfList>

export type HandleClickType = (e: React.MouseEvent<HTMLElement>) => void
export interface IElementsList {
  elementsList: ElementsListType,
  categories: ICategoryList,
  data: DataType
  showDescription?: (current: CurrentElementType) => object,
  setElementsList: (list: ElementsListType) => object,
}
