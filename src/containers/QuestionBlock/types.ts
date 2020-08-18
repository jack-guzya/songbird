import { ReactNode } from 'react';
import { IQuestion, IData } from '../../modules/question/types';

export interface IQuestionBlock {
  question: IQuestion
  children: (data: IData) => ReactNode
}
