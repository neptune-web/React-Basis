import React, { useEffect, useRef } from 'react';

// styles
import styles from './index.module.scss';

interface ModalProps {
  open: boolean;
  close: (bool: boolean) => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { open, close } = props;
  const closeRef = useRef<HTMLHeadingElement>(null);

  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(closeRef, () => close(false));

  return (
    <>
      {open ? (
        <>
          <div className={styles.container}>
            <div className={styles.modal} ref={closeRef}>
              <button type='button' className={styles.closeButton} onClick={() => close(false)}>
                <div className='-mt-[5px]'>×</div>
              </button>
              {/* content */}
              <div className={styles.content}>......</div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
