// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux'

// Actions and reducer
import { showBirdDescription } from '../../actions/actionCreator';

// Components
import BirdDescription from '../../components/Description/Description'
import DescriptionText from '../../components/Description/DescriptionText'

// Data
import { birdDataType } from '../../data/birdsData'

// Style
import './Description.scss'

class Description extends Component<{ birdDescription: birdDataType | null }> {
  render() {
    const { birdDescription } = this.props
    console.log(!!birdDescription)

    return (
      <div className="description-block">
        {birdDescription ? <BirdDescription /> : <DescriptionText />}
      </div>
    )
  }
}

const DescriptionHOC = connect(({ birdDescription }: { birdDescription: birdDataType | null }) => ({
  birdDescription,
}), { showBirdDescription })(Description)

export default DescriptionHOC
