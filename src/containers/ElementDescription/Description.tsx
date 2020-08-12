// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Components
import ElementDescription from '../../components/ElementDescription/ElementDescription';
import ElementText from '../../components/ElementText/ElementText';
// Types
import { ElementsListType } from '../../components/ElementsList/types';
import { CurrentDescriptionType } from '../../actions/types';

type DescriptionProps = {
  currentDescription: CurrentDescriptionType
  elementsList: ElementsListType
}

const Description = ({ currentDescription, elementsList }: DescriptionProps) => {
  if (currentDescription === null) {
    return <ElementText />;
  }

  const {
    firstName, secondName, image, description,
  } = elementsList[currentDescription];
  return (
    <ElementDescription
      firstName={firstName}
      secondName={secondName}
      image={image}
      description={description}
    />
  );
};

export default connect(({ currentDescription, elementsList }: DescriptionProps) => ({
  currentDescription,
  elementsList,
}))(Description);
