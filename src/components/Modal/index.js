import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';

import { FullScreen } from './styles';

export default function Modal({
  open,
  title,
  icon,
  success,
  footerButtons,
  children,
  closeAction,
}) {
  const modal = useRef();

  // Handle the key press close modal on 'ESC' event.
  const handleKeyUp = useCallback(
    e => {
      const keys = {
        27: () => {
          e.preventDefault();
          closeAction();
          window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [closeAction]
  );

  // Handle the mouse click on overlay to close modal.
  const handleOutsideClick = useCallback(
    e => {
      if (modal.current.parentNode === e.target) {
        closeAction();
        document.removeEventListener('click', handleOutsideClick, false);
      }
    },
    [closeAction]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleKeyUp, handleOutsideClick, open]);

  return (
    <FullScreen
      success={!!success}
      open={open ? 1 : 0}
      footerButtons={!!footerButtons}
    >
      <div ref={modal}>
        <header>
          {icon && icon}
          <h3>{title}</h3>
          {children[0]}
        </header>
        {children[1]}
        <button
          className="btn__transparent"
          type="button"
          onClick={() => closeAction()}
        >
          <MdClose size={28} />
        </button>
      </div>
    </FullScreen>
  );
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.element.isRequired,
  icon: PropTypes.element,
  success: PropTypes.bool,
  footerButtons: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  closeAction: PropTypes.func,
};

Modal.defaultProps = {
  icon: undefined,
  success: false,
  footerButtons: false,
  closeAction: null,
};
