/* eslint-disable react/state-in-constructor */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable indent */
// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { setSelection } from '../../modules/elementsList/elementsList';
// Components
import ElementOfList from '../../components/ElementOfList/ElementOfList';
// Types
import { IElementsListProps, HandleClickType } from './types';
// Domains
import Level from '../../domains/Level';
// Style
import './ElementsList.scss';

class ElementsList extends Component<IElementsListProps> {
  level = new Level();

  handleClick: HandleClickType = (e) => {
    const { setSelection } = this.props;
    const id = +e.currentTarget.dataset.element;
    setSelection(id);
    this.level.handleSelection();
  }

  renderList = () => {
    const { elementsList } = this.props;
    const { list } = elementsList;
    console.log('RENDER LIST', elementsList);
    return list && list.map(
      ({ firstName, status }, index) => (
        <li
          className="list__item"
          key={firstName}
          data-element={index}
          onClick={this.handleClick}
        >
          <ElementOfList
            firstName={firstName}
            isSuccess={status}
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
), { setSelection })(ElementsList);
