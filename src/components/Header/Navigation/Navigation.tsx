import * as React from 'react';

// Components
import NavButton from './NavButton';

// Styles
import './Navigation.scss';

type StateOfButton = {
  name: string,
  isActive: boolean,
  id: string,
}

class Navigation extends React.Component<{}, { buttonsList: Array<StateOfButton> }> {
  state = {
    buttonsList: [
      { name: 'Разминка', isActive: true, id: 'navBtn-0' },
      { name: 'Воробьиные', isActive: false, id: 'navBtn-1' },
      { name: 'Лесные птицы', isActive: false, id: 'navBtn-2' },
      { name: 'Певчие птицы', isActive: false, id: 'navBtn-3' },
      { name: 'Хищные птицы', isActive: false, id: 'navBtn-4' },
      { name: 'Морские птицы', isActive: false, id: 'navBtn-5' },
    ],
  };

  render() {
    const { buttonsList } = this.state;

    return (
      <nav className="header__navigation" >
        {buttonsList.map(
          (button: StateOfButton) => (
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
