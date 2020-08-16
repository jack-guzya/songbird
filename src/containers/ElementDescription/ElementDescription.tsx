/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Types
import { IElementDescription } from './types';
// Style
import './ElementDescription.scss';

class ElementDescription extends React.Component<IElementDescription> {
  renderDefaultText = () => (
    <div>
      <h3>Послушайте аудиозапись</h3>
      <p>Выберите один из вариантов ответа</p>
    </div>
  )

  render() {
    const { currentDescription, elementsList } = this.props;
    return (
      <div className="element-description-block">
        {currentDescription === null
          ? this.renderDefaultText()
          : this.props.children(elementsList[currentDescription])}
      </div>
    );
  }
}

export default connect(({ currentDescription, elementsList }: IElementDescription) => ({
  currentDescription,
  elementsList,
}))(ElementDescription);
