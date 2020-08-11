// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import ElementDescription from '../../components/ElementDescription/ElementDescription';
import ElementText from '../../components/ElementText/ElementText';
// Types
import { ElementDescriptionType } from '../../components/ElementDescription/types';

const Description = ({ ...description }: ElementDescriptionType) => (
  description
    ? (
      <ElementDescription
        firstName={description.firstName}
        secondName={description.secondName}
        image={description.image}
        description={description.description}
      />
    )
    : <ElementText />
);

export default connect(({ description }: ElementDescriptionType) => ({
  description,
}))(Description);
