import React from 'react';

// Components
import NavButton from './NavButton';

// Styles
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      buttonsList: [
        { name: 'Разминка', isActive: true, id: 'navBtn-0' },
        { name: 'Воробьиные', isActive: false, id: 'navBtn-1' },
        { name: 'Лесные птицы', isActive: false, id: 'navBtn-2' },
        { name: 'Певчие птицы', isActive: false, id: 'navBtn-3' },
        { name: 'Хищные птицы', isActive: false, id: 'navBtn-4' },
        { name: 'Морские птицы', isActive: false, id: 'navBtn-5' },
      ],
    };
  }

  switchActive(stateIndex) {
    const { buttonsList } = this.state;

    buttonsList.forEach((item, index) => {
      const button = item;
      button.isActive = false;
      if (index === stateIndex) {
        button.isActive = true;
      }
    });

    this.setState({ buttonsList });
  }

  handleClick(e) {
    const name = e.target.textContent;
    const { buttonsList } = this.state;
    const stateIndex = buttonsList.findIndex((button) => button.name === name);

    if (
      stateIndex === undefined
      || stateIndex === -1) {
      return;
    }

    this.switchActive(stateIndex);
  }

  render() {
    const { buttonsList } = this.state;
    return (
      <nav className="header__navigation" onClick={this.handleClick}>
        {buttonsList.map(
          (button) => (
            <NavButton
              name={button.name}
              isActive={button.isActive}
              key={button.id}
            />
          ),
        )}
      </nav>
    );
  }
}

export default Navigation;
