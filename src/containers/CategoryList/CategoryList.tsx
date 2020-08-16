// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Actions
import { setCategories } from '../../actions/actionCreator';
// Components
import CategoryElement from '../../components/CategoryElement/CategoryElement';
// Types
import { ICategoryList } from './types';
import { DataType } from '../../data/types';
// Styles
import './CategoryList.scss';

type CategoriesPropsType = {
  categories: ICategoryList
  data: DataType
  setCategories: (category: ICategoryList) => any
}

class CategoryList extends React.Component<CategoriesPropsType> {
  componentDidMount() {
    const { categories, data, setCategories } = this.props;
    if (categories.list) { return; }
    setCategories({ current: 0, list: data.categories });
  }

  render() {
    const { categories } = this.props;
    const { list, current } = categories;

    return (
      <div className="category-list">
        {list && list.map((name, index) => (
          <CategoryElement
            name={name}
            isActive={current === index}
          />
        ))}
      </div>
    );
  }
}

export default connect(({ categories, data }: CategoriesPropsType) => ({
  categories,
  data,
}), { setCategories })(CategoryList);
