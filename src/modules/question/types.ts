import { IElementImage } from '../../components/ElementImage';
import { IElementName } from '../../components/ElementName';
import { IAudioPlayer } from '../../components/AudioPlayer';

export interface IData extends IElementImage, IElementName, IAudioPlayer { }

export type CurrentQuestionType = number | null

export interface IQuestion {
  data: IData,
  current: CurrentQuestionType
}
