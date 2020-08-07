import * as React from 'react';

type OptionAnswer = {
  name: string,
}

type AnswersListProps = {
  answersList: OptionAnswer[],
}

const AnswersList = ({ answersList }: AnswersListProps) => (
  <div className="answers-list">
    <ul className="answers-list__list">
      {
        answersList.map(({ name }: OptionAnswer) => <li>{name}</li>)
      }
    </ul>
  </div>
)

AnswersList.defaultProps = {
  answersList: [
    {
      name: 'Орел'
    },
    {
      name: 'Коршун'
    },
    {
      name: 'Лунь'
    },
    {
      name: 'Сокол'
    },
    {
      name: 'Ястреб'
    },
    {
      name: 'Филин'
    }
  ]
}

export default AnswersList
