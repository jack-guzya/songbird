/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable indent */
// React
import React, { Component } from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import {
  setElementsList, showDescription, updateScore, setStatus,
} from '../../actions/actionCreator';
// Components
import ElementOfList from '../../components/ElementOfList/ElementOfList';
import getData from './getData';
// Types
import { IElementsList, HandleClickType } from './types';

class ElementsList extends Component<IElementsList> {
  handleClick: HandleClickType = (e) => {
    const { showDescription } = this.props;
    const id = +e.currentTarget.dataset.element;
    showDescription(id);
  }

  render() {
    const { elementsList } = this.props;
    const list = elementsList && elementsList.map(
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

    return (
      <div className="element-list">
        <ul className="element-list__list">
          {list}
        </ul>
      </div>
    );
  }
}

const ElementListWithData = getData(ElementsList);

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
})(ElementListWithData);
