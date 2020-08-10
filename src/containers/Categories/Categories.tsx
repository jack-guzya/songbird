// React
import React from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import { setCategory } from '../../actions/actionCreator';

// Components
import CategoryList from '../../components/CategoryList/CategoryList';

type category = {
  name: string,
  isActive: boolean,
  // id: string,
}

type categoriesProps = {
  categories: {
    current: number,
    list: Array<category> | null,
  }

  data: {
    categories: Array<string>
    list: Array<[]>
  }

  setCategory: (category: object) => void
}

class Categories extends React.Component<categoriesProps> {
  componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { categories, data, setCategory } = this.props;
    if (categories.list) { return; }

    const preparedCategoryList = this.prepareCategoryList(data.categories);
    setCategory({ current: 0, list: preparedCategoryList });
  }

  prepareCategoryList = (data: Array<string>): Array<category> => (
    data.reduce((preparedData, categoryName, index) => {
      const updatedData = preparedData;

      updatedData.push({
        name: categoryName,
        isActive: index !== 0,
      });

      return updatedData;
    }, [])
  )

  render() {
    const { categories } = this.props;

    return (
      <CategoryList categoryList={categories.list} />
    );
  }
}

const CategoriesHOC = connect(({ categories, data }: categoriesProps) => ({
  categories,
  data,
}), { setCategory })(Categories);

export default CategoriesHOC;
