// React
import React, { ReactNode } from 'react';
// Helpers
import Portal from '../../helpers/Portal';
// Styles
import './style.scss';

export interface IModal {
  title?: ReactNode,
  body?: ReactNode,
  footer?: ReactNode
}

const Modal: React.FC<IModal> = ({ title, body, footer }) => (
  <Portal className="modal">
    <div className="modal__overlay">
      <div className="modal__window">
        <div className="modal__header">
          {title}
        </div>
        <div className="modal__body">
          {body}
        </div>
        <div className="modal__footer">
          {footer}
        </div>
      </div>
    </div>
  </Portal>
);

export default Modal;
