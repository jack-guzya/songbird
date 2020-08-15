/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import DefaultText from './DefaultText';
// Types
import { IElementDescription } from './types';
// Style
import './ElementDescription.scss';

class ElementDescription extends React.Component<IElementDescription> {
  render() {
    const { currentDescription, elementsList } = this.props;
    return (
      <div className="element-description-block">
        {currentDescription === null
          ? <DefaultText />
          : this.props.children(elementsList[currentDescription])}
      </div>
    );
  }
}

export default connect(({ currentDescription, elementsList }: IElementDescription) => ({
  currentDescription,
  elementsList,
}))(ElementDescription);
