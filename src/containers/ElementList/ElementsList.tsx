/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable indent */
// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { showDescription } from '../../modules/elementsList/elementsList';
// Components
import ElementOfList from '../../components/ElementOfList/ElementOfList';
// Types
import { IElementsListProps, HandleClickType } from './types';
// Style
import './ElementsList.scss';

class ElementsList extends Component<IElementsListProps> {
  handleClick: HandleClickType = (e) => {
    const { showDescription } = this.props;
    const id = +e.currentTarget.dataset.element;
    showDescription(id);
  }

  renderList = () => {
    const { elementsList } = this.props;
    const { list } = elementsList;
    console.log('RENDER LIST', elementsList);
    return list && list.map(
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
