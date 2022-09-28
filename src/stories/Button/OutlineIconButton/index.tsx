import React from 'react';

// styles
import styles from './index.module.scss';

interface OutlineIconButtonProps {
  icon: any;
  onClick?: () => void;
  outlineColor?: string;
}

export const OutlineIconButton = (props: OutlineIconButtonProps) => {
  const { icon, onClick = () => {}, outlineColor = '#0ACE5F' } = props;
  return (
    <button
      type='button'
      className={styles.container}
      onClick={() => onClick()}
      style={{ borderColor: outlineColor }}
    >
      <img src={icon} alt='' width={11} />
    </button>
  );
};
