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
  <Portal>
    <div
      className="modal fade"
      id="modal"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            {title}
          </div>
          <div className="modal-body">
            {body}
          </div>
          <div className="modal-footer">
            {footer}
          </div>
        </div>
      </div>
    </div>
  </Portal>
);

export default Modal;
