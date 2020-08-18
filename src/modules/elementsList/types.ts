import { IElementImage } from '../../components/ElementImage/types';
import { IElementName } from '../../components/ElementName/types';
import { IElementText } from '../../components/ElementText/types';

export type SelectedType = number | null

export interface IElementOfList extends IElementImage, IElementName, IElementText {}

export interface IElementsList {
  list: Array<IElementOfList> | null,
  selected: SelectedType
}
