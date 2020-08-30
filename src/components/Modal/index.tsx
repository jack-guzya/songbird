// React
import React, { ReactNode } from 'react';
import classNames from 'classnames';
// Helpers
import Portal from '../../helpers/Portal';
// Styles
import './style.scss';

export interface IModal {
  id: string
  mode?: 'extra' | 'large'
  title?: ReactNode,
  body?: ReactNode,
  footer?: ReactNode

}

const Modal: React.FC<IModal> = ({
  title, body, footer, id, mode = 'large',
}) => {
  const classes = classNames(
    'modal-dialog',
    'modal-dialog-centered',
    'modal-dialog-scrollable',
    { 'modal-xl': mode === 'extra' },
    { 'modal-lg': mode === 'large' },
  );

  return (
    <Portal>
      <div
        className="modal fade"
        id={id}
        tabIndex={-1}
        role="dialog"
        data-backdrop="static"
      >
        <div className={classes}>
          <div className="modal-content">
            <div className="modal-header justify-content-md-center">
              <h1 className="modal-title">{title}</h1>
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
};

export default Modal;
