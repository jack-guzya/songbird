/* eslint-disable no-unused-vars */
import React from 'react';
// Types
import { ElementTextType } from './types';

const DEFAULT_TEXT = 'Прослушайте аудиозапись и узнайте, шо за курыца чирикает вам в ухо.';

const ElementText = ({ description = DEFAULT_TEXT }: ElementTextType) => (
  <p className="description-block__text">{description}</p>
);

export default ElementText;
