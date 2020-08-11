/* eslint-disable no-unused-vars */
// Types
import { ElementImageType } from '../ElementImage/types';
import { ElementNameType } from '../ElementName/types';
import { ElementTextType } from '../ElementText/types';

export type ElementIdType = number

export type ElementDescriptionType = ElementImageType & ElementNameType & ElementTextType
