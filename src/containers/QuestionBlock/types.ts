import { ReactNode } from 'react';
import { IData } from '../../modules/question/types';
import { LevelStatus } from '../../modules/levelStatus';

export interface IQuestionBlock {
  children: ({ show, ...data }: IData & { show: LevelStatus }) => ReactNode
}
