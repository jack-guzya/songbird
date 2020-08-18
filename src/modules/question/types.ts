import { IElementImage } from '../../components/ElementImage/types';
import { IElementName } from '../../components/ElementName/types';
import { IAudioPlayer } from '../../components/AudioPlayer/types';

export interface IData extends IElementImage, IElementName, IAudioPlayer { }

export type CurrentQuestionType = number | null

export interface IQuestion {
  data: IData,
  current: CurrentQuestionType
}
