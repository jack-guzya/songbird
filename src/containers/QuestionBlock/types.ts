import { ReactNode } from 'react';
import { IData } from '../../redux/question-backup/types';
import { LevelStatus } from '../../redux/levelStatus-backup/types';

export interface IQuestionBlock {
  children: ({ show, ...data }: IData & { show: LevelStatus }) => ReactNode
}
