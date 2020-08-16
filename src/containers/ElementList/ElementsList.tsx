/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable indent */
// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Libs
import shuffle from 'lodash.shuffle';
// Actions
import {
  setElementsList, showDescription,
} from '../../actions/actionCreator';
// Components
import ElementOfList from '../../components/ElementOfList/ElementOfList';
// Types
import { IElementsList, HandleClickType } from './types';
// Style
import './ElementsList.scss';

class ElementsList extends Component<IElementsList> {
  componentDidMount() {
    this.checkList();
  }

  handleClick: HandleClickType = (e) => {
    const { showDescription } = this.props;
    const id = +e.currentTarget.dataset.element;
    showDescription(id);
  }

  checkList = () => {
    const {
      elementsList, data, categories, setElementsList,
    } = this.props;
    if (elementsList) { return; }

    const currentList = data.list[categories.current];
    setElementsList(shuffle(currentList));
  }

  renderList = () => {
    const { elementsList } = this.props;
    return elementsList && elementsList.map(
      ({ firstName }, index) => (
        <li
          data-element={index}
          onClick={this.handleClick}
        >
          <ElementOfList
            key={firstName}
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

export default connect(({
  elementsList, data, categories,
}: any) => (
    {
      elementsList,
      data,
      categories,
    }
  ), {
  setElementsList, showDescription,
})(ElementsList);
