// React
import React from 'react';
// Helpers
import Portal from '../../helpers/Portal/Portal';
// Types
import { IModal } from './types';
// Styles
import './Modal.scss';

const Modal: React.FC<IModal> = ({
  isOpen,
  title,
  body,
  footer,
}) => (
  isOpen
  && (
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
  )
);

export default Modal;
