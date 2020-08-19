import { IElementsList, SelectedType } from '../../modules/elementsList/types';
import { Status } from '../../modules/status/type';

export type HandleClickType = (e: React.MouseEvent<HTMLElement>) => void
export interface IElementsListProps {
  elementsList: IElementsList,
  // status: Status;
  setSelection?: (selected: SelectedType) => object,
}
