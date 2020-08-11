/* eslint-disable no-unused-vars */
import React from 'react';
// Types
import { ElementTextType } from './types';

const ElementText = ({ description }: ElementTextType) => (
  <p className="description-block__text">{description}</p>
);

ElementText.defaultProps = {
  text: 'Прослушайте аудиозапись и узнайте, шо за курыца чирикает вам в ухо.',
};

export default ElementText;
