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
    const { elementsList } = this.props;
    const { selected, list } = elementsList;
    return (
      <div className="element-description-block">
        {selected === null
          ? this.renderDefaultText()
          : this.props.children(list[selected])}
      </div>
    );
  }
}

export default connect(({ elementsList }: IElementDescription) => ({
  elementsList,
}))(ElementDescription);
