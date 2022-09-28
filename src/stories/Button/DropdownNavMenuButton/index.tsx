import React, { useEffect, useRef } from 'react';

// storybook components
import { NavMenu } from '../../NavMenu';

// styles
import styles from './index.module.scss';

interface ButtonProps {
  viewport: string;
  pathname: string;
  gotoPath: (path: string) => void;
  disabled?: boolean;
  icon: any;
  onClick?: () => void;
  size?: string;
  open: boolean;
}

export const DropdownNavMenuButton = ({
  viewport,
  pathname,
  gotoPath = () => {},
  disabled = false,
  icon,
  onClick = () => {},
  size = '',
  open,
  ...props
}: ButtonProps) => {
  const closeRef = useRef<HTMLDivElement>(null);

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

  useOnClickOutside(closeRef, () => onClick());

  return (
    <div className='relative'>
      <button
        type='button'
        className={`${styles.buttonStyle} ${size === 'h32' ? styles.h32 : ''}`}
        disabled={disabled}
        onClick={onClick}
      >
        <img src={icon} alt='' width={24} height={24} />
      </button>
      {open ? (
        <div className={styles.container}>
          <div className={styles.menuArea} ref={closeRef}>
            <NavMenu
              viewport={viewport}
              pathname={pathname}
              gotoPath={(path: string) => gotoPath(path)}
              onClick={onClick}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
