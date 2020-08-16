// Types
import { ReactNode } from 'react';
import { IElementImage } from '../../components/ElementImage/types';
import { IElementName } from '../../components/ElementName/types';
import { IElementText } from '../../components/ElementText/types';

import { CurrentDescriptionType } from '../../actions/types';

export type ElementIdType = number

export type ElementDescriptionType = IElementImage & IElementName & IElementText

export interface IElementDescription {
  currentDescription: CurrentDescriptionType
  elementsList: Array<ElementDescriptionType>
  children: ({ ...props }: ElementDescriptionType) => ReactNode
}
