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
import ElementsListComponent from '../../components/ElementsList/ElementsList';
import checkListData from './CheckListData';
// Types
import { ElementsListType, HandleClickType, CurrentElementType } from '../../components/ElementsList/types';
import { DataType } from '../../data/types';
import { ICategoryList } from '../../components/CategoryList/types';
import { StatusType } from '../../actions/types';
import { ElementIdType, ElementDescriptionType } from '../ElementDescription/types';
import { ScoreType } from '../../components/Score/types';

// type ElementsListProps = {
//   elementsList: ElementsListType,
//   categories: CategoryListType,
//   data: DataType
//   status: StatusType
//   showDescription: (description: ElementDescriptionType) => object,
//   setElementsList: (list: ElementsListType) => object,
//   updateScore: (score: ScoreType) => object
//   setStatus: (status: StatusType) => object
// }

type ElementsListProps = {
  elementsList: ElementsListType,
  categories: ICategoryList,
  data: DataType
  status: StatusType
  showDescription: (current: CurrentElementType) => object,
  setElementsList: (list: ElementsListType) => object,
  updateScore: (score: ScoreType) => object
  setStatus: (status: StatusType) => object
}

class ElementsList extends Component<ElementsListProps> {
  score = 5

  // getElementDescription = (
  //   dataId: ElementIdType, list: ElementsListType,
  // ): ElementDescriptionType | null => (
  //     list.find(({ id }) => dataId === id) || null
  //   )

  // handleResult = (isSuccess: boolean): void => {
  //   const {
  //     updateScore, setStatus, status,
  //   } = this.props;

  //   if (status) { return; }

  //   if (isSuccess) {
  //     updateScore(this.score);
  //     setStatus(true);
  //     return;
  //   }

  //   setStatus(false);
  //   this.score = this.score > 0 ? this.score - 1 : 0;
  // }

  handleClick: HandleClickType = (e) => {
    const { elementsList, showDescription } = this.props;
    const id = +e.currentTarget.dataset.option;
    // const description = this.getElementDescription(id, elementsList);
    // const { isSuccess } = description;

    // this.handleResult(!!isSuccess);
    showDescription(id);
  }

  render() {
    const { elementsList } = this.props;

    return (
      <ElementsListComponent
        list={elementsList}
        handleClick={this.handleClick}
      />
    );
  }
}

const ElementListWithData = checkListData(ElementsList);

export default connect(({
  elementsList, data, categories, status,
}: ElementsListProps) => (
    {
      elementsList,
      data,
      categories,
      status,
    }
  ), {
  setElementsList, showDescription, updateScore, setStatus,
})(ElementListWithData);
