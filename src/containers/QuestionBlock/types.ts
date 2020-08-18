import { ReactNode } from 'react';
import { IQuestion, IData } from '../../modules/question/types';
import { Status } from '../../modules/status/type';

export interface IQuestionBlock {
  question: IQuestion
  status: Status
  children: ({ show, ...data }: IData & { show: Status }) => ReactNode
}
