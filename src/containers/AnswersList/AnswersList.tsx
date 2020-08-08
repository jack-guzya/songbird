import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import { switchAnswerOptions, showBirdDescription } from '../../actions/actionCreator';

// Birds data type
// eslint-disable-next-line no-unused-vars
import { birdDataType } from '../../data/birdsData';

// Components
import Option from './Option';

// Style
import './AnswersList.scss';

type componentProps = {
  answerOptions: birdDataType[],
  showBirdDescription: (description: object) => object
}

class AnswersList extends Component<componentProps> {
  getBirdDescription = (dataId: number, data: Array<birdDataType>) => (
    data.find(({ id }) => dataId === id) || null
  )

  handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
    // eslint-disable-next-line no-shadow
    const { answerOptions, showBirdDescription } = this.props;
    const id: number = +e.currentTarget.dataset.option;

    const birdDescription: birdDataType = this.getBirdDescription(id, answerOptions);

    showBirdDescription(birdDescription);

    console.log(birdDescription);
  }

  render() {
    const { answerOptions } = this.props;

    return (
      <div className="answers-list">
        <ul className="answers-list__list">
          {
            answerOptions.map(
              ({ name, id }: birdDataType) => (
                <Option
                  key={id}
                  data={id}
                  name={name}
                  answerOptions={answerOptions}
                  handleClick={this.handleClick}
                />
              ),
            )
          }
        </ul>
      </div>
    );
  }
}

const AnswersListHOC = connect(({ answerOptions }: { answerOptions: birdDataType[] }) => (
  {
    answerOptions,
  }
), { switchAnswerOptions, showBirdDescription })(AnswersList);

export default AnswersListHOC;
