import * as React from 'react';

// Redux
import { connect } from 'react-redux';

// Actions
import { switchAnswerOptions } from '../../actions/actionCreator';

// Components
import Option from './Option';

// Style
import './AnswersList.scss';

type answerOption = {
  id: number,
  name: string,
  species: string,
}

class AnswersList extends React.Component<{ answerOptions: answerOption[] }> {
  

  render() {
    const { answerOptions } = this.props;

    return (
      <div className="answers-list">
        <ul className="answers-list__list">
          {
            answerOptions.map(
              ({ name, id }: answerOption) => (
                <Option key={id} name={name}/>
              )
            )
          }
        </ul>
      </div>
    )
  }
}


const AnswersListHOC = connect(({ answerOptions }: { answerOptions: object[] }) => (
  {
    answerOptions,
  }
), { switchAnswerOptions })(AnswersList)



export default AnswersListHOC
