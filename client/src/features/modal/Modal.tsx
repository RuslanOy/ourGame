import React from 'react';
import './modal.scss';

function Modal({
  active,
  setActive,
  children,
}: {
  active: boolean;
  setActive: (value: boolean) => void;
  children: JSX.Element;
}): JSX.Element {
  return (
    <div
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
