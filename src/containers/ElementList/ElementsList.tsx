/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable indent */
// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { showDescription } from '../../actions/actionCreator';
// Components
import ElementOfList from '../../components/ElementOfList/ElementOfList';
// Types
import { IElementsList, HandleClickType } from './types';
// Style
import './ElementsList.scss';

class ElementsList extends Component<IElementsList> {
  handleClick: HandleClickType = (e) => {
    const { showDescription } = this.props;
    const id = +e.currentTarget.dataset.element;
    showDescription(id);
  }

  renderList = () => {
    const { elementsList } = this.props;
    console.log('RENDER LIST', elementsList);
    return elementsList && elementsList.map(
      ({ firstName }, index) => (
        <li
          className="list__item"
          key={firstName}
          data-element={index}
          onClick={this.handleClick}
        >
          <ElementOfList
            firstName={firstName}
          />
        </li>
      ),
    );
  }

  render() {
    return (
      <div className="element-list">
        <ul className="element-list__list">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

export default connect(({ elementsList }: any) => (
  {
    elementsList,
  }
), { showDescription })(ElementsList);
