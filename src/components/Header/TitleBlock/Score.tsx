import * as React from 'react';

class Score extends React.Component<{}, {score: number}> {
    state = {
      score: 0,
    };

  render() {
    const { score } = this.state;

    return (
        <span className="score__value">{score}</span>
    );
  }
}

export default Score;
