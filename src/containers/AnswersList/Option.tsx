import React from 'react'

const Option = ({ name }: {name: string}) => (
  <li className="option">
    <span className="indicator" />
    <p className="title">{name}</p>
  </li>
)

export default Option
