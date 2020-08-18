import { IElementImage } from '../../components/ElementImage/types';
import { IElementName } from '../../components/ElementName/types';
import { IElementText } from '../../components/ElementText/types';

export interface IElement extends IElementImage, IElementName, IElementText {
  id?: number,
  audio?: string
}

export interface IData {
  categories: Array<string>,
  list: Array<Array<IElement>>
}
