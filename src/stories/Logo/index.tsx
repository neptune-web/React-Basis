import React from 'react';

// images and icons
import LogoIcon from '../assets/icons/Icon_Logo.svg';

// styles
import styles from './index.module.scss';

interface LogoProps {
  onClick: () => void;
}

export const Logo: React.FC<LogoProps> = (props) => {
  const { onClick } = props;
  return (
    <img
      src={LogoIcon}
      alt='logo'
      className={styles.logo}
      onClick={() => onClick()}
      onKeyDown={() => onClick()}
    />
  );
};
