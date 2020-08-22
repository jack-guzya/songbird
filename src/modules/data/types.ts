import { IElementImage } from '../../components/ElementImage';
import { IElementName } from '../../components/ElementName';
import { IElementText } from '../../components/ElementText';

export interface IElement extends IElementImage, IElementName, IElementText {
  id?: number,
  audio?: string
}

export interface IData {
  categories: Array<string>,
  list: Array<Array<IElement>>
}
