// React
import React from 'react';
import ReactDOM from 'react-dom';
// Types
import { IPortal } from './types';

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
