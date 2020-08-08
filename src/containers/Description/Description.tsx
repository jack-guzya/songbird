// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Actions and reducer
import { showBirdDescription } from '../../actions/actionCreator';

// Components
import BirdDescription from '../../components/Description/Description';
import DescriptionText from '../../components/Description/DescriptionText';

// Data
// eslint-disable-next-line no-unused-vars
import { birdDataType } from '../../data/birdsData';

// Style
import './Description.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Description extends Component<{ birdDescription: birdDataType | null }> {
  render() {
    const { birdDescription } = this.props;

    return (
      <div className="description-block">
        {birdDescription
          ? (
            <BirdDescription
              name={birdDescription.name}
              species={birdDescription.species}
              image={birdDescription.image}
              description={birdDescription.description}
            />
          ) : <DescriptionText />}
      </div>
    );
  }
}

const DescriptionHOC = connect(({ birdDescription }: { birdDescription: birdDataType | null }) => ({
  birdDescription,
}), { showBirdDescription })(Description);

export default DescriptionHOC;
