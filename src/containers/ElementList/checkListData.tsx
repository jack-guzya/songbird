/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
// Types
import { ElementsListType } from '../../components/ElementsList/types';
import { DataType } from '../../data/types';
import { CategoryListType } from '../../components/CategoryList/types';

type checkListDataProps = {
  elementsList: ElementsListType,
  categories: CategoryListType,
  data: DataType
  setElementsList: (list: ElementsListType) => object,
}

const checkListData = (View: React.ComponentClass) => (
  class extends Component<checkListDataProps> {
    componentDidMount() {
      const {
        elementsList, data, categories, setElementsList,
      } = this.props;
      if (elementsList) { return; }

      const currentList = data.list[categories.current];
      setElementsList(currentList);
    }

    render() {
      return (
        <View {...this.props} />
      );
    }
  }
);

export default checkListData;
