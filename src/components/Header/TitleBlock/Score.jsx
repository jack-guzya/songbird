import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
    };
  }

  render() {
    const { score } = this.state;
    return (
      <div className="title-block__score">
        <p className="score__title">
          Score:
          <span className="score__value">{score}</span>
        </p>
      </div>
    );
  }
}

export default Score;
