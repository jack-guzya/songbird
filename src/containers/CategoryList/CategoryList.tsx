/* eslint-disable react/prefer-stateless-function */
// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import CategoryElement from '../../components/CategoryElement/CategoryElement';
// Types
import { ICategories } from '../../modules/categories/types';
// Styles
import './CategoryList.scss';

interface ICategoriesProps {
  categories: ICategories
}
class CategoryList extends React.Component<ICategoriesProps> {
  render() {
    const { categories } = this.props;
    const { list, current } = categories;

    return (
      <div className="category-list">
        {list && list.map((name, index) => (
          <CategoryElement
            key={name}
            name={name}
            isActive={current === index}
          />
        ))}
      </div>
    );
  }
}

export default connect(({ categories }: ICategoriesProps) => ({
  categories,
}))(CategoryList);
