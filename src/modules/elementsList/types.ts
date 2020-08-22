import { IElementImage } from '../../components/ElementImage';
import { IElementName } from '../../components/ElementName';
import { IElementText } from '../../components/ElementText';

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
