import { IElementImage } from '../../components/ElementImage/types';
import { IElementName } from '../../components/ElementName/types';
import { IElementText } from '../../components/ElementText/types';

export type SelectedType = number | null

export type Status = boolean | null
export interface ElementStatus {
  status: Status
  id: number
}

export interface IElementOfList extends IElementImage, IElementName, IElementText {
  status: Status
}

export interface IElementsList {
  list: Array<IElementOfList> | null,
  selected: SelectedType
}
