// React
import React from 'react';
import ReactDOM from 'react-dom';

export interface IPortal {
  className: string
}

class Portal extends React.Component<IPortal> {
  element = document.createElement('div')

  componentDidMount() {
    document.body.append(this.element);
  }

  componentWillUnmount() {
    this.element.remove();
  }

  render() {
    const { children, className } = this.props;
    this.element.className = className;

    return (
      ReactDOM.createPortal(children, this.element)
    );
  }
}

export default Portal;
