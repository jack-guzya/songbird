/* eslint-disable no-shadow */
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import { setOptionsList, showDescription } from '../../actions/actionCreator';

// Birds data type
// eslint-disable-next-line no-unused-vars
// import { birdDataType } from '../../data/birdsData';

// Components
import OptionsList from '../../components/OptionsList/OptionsList';

// Types
// eslint-disable-next-line no-unused-vars
import { elementDescriptionProps } from '../../components/ElementDescription/ElementDescription';

type optionsProps = {
  optionsList: Array<elementDescriptionProps>,
  categories: {
    current: number,
    list: Array<object> | null,
  }
  data: {
    categories: Array<string>
    list: Array<[]>
  }
  showDescription: (description: object) => object,
  setOptionsList: (list: Array<object>) => void,
}

class Options extends Component<optionsProps> {
  componentDidMount() {
    const {
      optionsList, data, categories, setOptionsList,
    } = this.props;
    if (optionsList) { return; }

    setOptionsList(data.list[categories.current]);
  }

  getElementDescription = (dataId: number, data: Array<elementDescriptionProps>) => (
    data.find(({ id }) => dataId === id) || null
  )

  handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { optionsList, showDescription } = this.props;
    const id: number = +e.currentTarget.dataset.option;

    const description: elementDescriptionProps = this.getElementDescription(id, optionsList);

    showDescription(description);
  }

  render() {
    const { optionsList } = this.props;

    return (
      <OptionsList
        list={optionsList}
        handleClick={this.handleClick}
      />
    );
  }
}

const OptionsHOC = connect(({ optionsList, data, categories }: optionsProps) => (
  {
    optionsList,
    data,
    categories,
  }
), { setOptionsList, showDescription })(Options);

export default OptionsHOC;
