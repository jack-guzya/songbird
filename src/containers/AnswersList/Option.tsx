import React from 'react';

// Birds data type
// eslint-disable-next-line no-unused-vars
import { birdDataType } from '../../data/birdsData';

type componentProps = {
  name: string,
  data: number,
  answerOptions: birdDataType[],
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void
}

const Option = ({ name, data, handleClick }: componentProps) => (
  <li
    className="option"
    data-option={data}
    onClick={handleClick}
  >
    <span className="indicator" />
    <p className="title">{name}</p>
  </li>
);

export default Option;
