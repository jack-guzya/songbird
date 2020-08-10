import React from 'react';

type props = {
  text?: string
}

const DescriptionText = ({ text }: props) => (
  <p className="description-block__text">{text}</p>
);

DescriptionText.defaultProps = {
  text: 'Прослушайте аудиозапись и узнайте, шо за курыца чирикает вам в ухо.',
};

export default DescriptionText;
