import React from 'react';
// Types
import { IElementText } from './types';

// const DEFAULT_TEXT = 'Прослушайте аудиозапись и узнайте, шо за курыца чирикает вам в ухо.';

const ElementText: React.FC<IElementText> = ({ description }) => (
  <p className="description-block__text">{description}</p>
);

export default ElementText;
