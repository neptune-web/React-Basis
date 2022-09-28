import React from 'react';

// styles
import styles from './index.module.scss';

interface ButtonProps {
  disabled?: boolean;
  icon: any;
  title: string;
  onClick?: () => void;
  active: boolean;
}

export const NavMenuItemButton = ({
  disabled = false,
  icon,
  title,
  onClick,
  active,
  ...props
}: ButtonProps) => (
  <div className={styles.container}>
    <button
      type='button'
      className={`${styles.button} ${active ? styles.activeButton : styles.deactiveButton}`}
      disabled={disabled}
      onClick={onClick}
    >
      <img src={icon} alt='' width={16} height={16} />
      <p className='flex pl-[22px]'>{title}</p>
    </button>
    <div className={active ? styles.activeBar : styles.deactiveBar} />
  </div>
);
