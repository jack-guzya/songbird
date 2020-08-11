/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import { setCategories } from '../../actions/actionCreator';

// Components
import CategoryList from '../../components/CategoryList/CategoryList';

// Types
import { CategoryListType } from '../../components/CategoryList/types';
import { DataType } from '../../data/types';

type CategoriesPropsType = {
  categories: CategoryListType
  data: DataType
  setCategories: (category: CategoryListType) => any
}

class Categories extends React.Component<CategoriesPropsType> {
  componentDidMount() {
    const { categories, data, setCategories } = this.props;
    if (categories.list) { return; }
    setCategories({ current: 0, list: data.categories });
  }

  // prepareCategoryList = (data: Array<string>): Array<category> => (
  //   data.reduce((preparedData, categoryName, index) => {
  //     const updatedData = preparedData;

  //     updatedData.push({
  //       name: categoryName,
  //       isActive: index === 0,
  //     });

  //     return updatedData;
  //   }, [])
  // )

  render() {
    const { categories } = this.props;

    return (
      <CategoryList
        list={categories.list}
        current={categories.current}
      />
    );
  }
}

export default connect(({ categories, data }: CategoriesPropsType) => ({
  categories,
  data,
}), { setCategories })(Categories);
