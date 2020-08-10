// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// Components
// eslint-disable-next-line no-unused-vars
import { ElementDescription, elementDescriptionProps } from '../../components/ElementDescription/ElementDescription';
import DescriptionText from '../../components/ElementDescription/DescriptionText/DescriptionText';

type descriptionProps = {
  description?: elementDescriptionProps | null
}
// eslint-disable-next-line react/prefer-stateless-function
class Description extends Component<descriptionProps> {
  render() {
    const { description } = this.props;

    return (
      description
        ? (
          <ElementDescription
            firstName={description.firstName}
            secondName={description.secondName}
            image={description.image}
            description={description.description}
          />
        )
        : <DescriptionText />
    );
  }
}

const DescriptionHOC = connect(({ description }: descriptionProps) => ({
  description,
}))(Description);

// export default Description;
export default DescriptionHOC;
