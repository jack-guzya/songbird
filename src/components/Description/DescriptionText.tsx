import * as React from 'react';

type props = {
  text?: string
}

const DescriptionText = ({text}: props) => (
<p className="description-block__text">{text}</p>
)

DescriptionText.defaultProps = {
  text: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.'
}


export default DescriptionText
