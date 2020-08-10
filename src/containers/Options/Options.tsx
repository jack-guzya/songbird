/* eslint-disable indent */
/* eslint-disable no-shadow */
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import {
  setOptionsList, showDescription, updateScore, setFailStatus, setSuccessStatus,
} from '../../actions/actionCreator';

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
  },
  data: {
    categories: Array<string>
    list: Array<[]>
  },
  status: boolean | null,
  showDescription: (description: object) => object,
  setOptionsList: (list: Array<object>) => void,
  updateScore: (score: number) => object
  setFailStatus: () => object
  setSuccessStatus: () => object
}

class Options extends Component<optionsProps> {
  score = 5

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

  handleResult = (isSuccess: boolean): void => {
    const {
      updateScore, setFailStatus, setSuccessStatus, status,
    } = this.props;

    if (status) { return; }

    if (isSuccess) {
      updateScore(this.score);
      setSuccessStatus();
      return;
    }

    setFailStatus();
    this.score = this.score > 0 ? this.score - 1 : 0;
  }

  handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const { optionsList, showDescription } = this.props;
    const id: number = +e.currentTarget.dataset.option;
    const description: elementDescriptionProps = this.getElementDescription(id, optionsList);
    const { isSuccess } = description;

    this.handleResult(!!isSuccess);
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

const OptionsHOC = connect(({
  optionsList, data, categories, status,
}: optionsProps) => (
    {
      optionsList,
      data,
      categories,
      status,
    }
  ), {
  setOptionsList, showDescription, updateScore, setFailStatus, setSuccessStatus,
})(Options);

export default OptionsHOC;
