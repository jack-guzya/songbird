import React from 'react';

type optionProps = {
  name: string,
  data: number,
  handleClick: (e: React.MouseEvent<HTMLLIElement>) => void
}

const Option = ({ name, data, handleClick }: optionProps) => (
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
