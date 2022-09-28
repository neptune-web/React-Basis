import React from 'react';

// styles
import styles from './index.module.scss';

interface ButtonDeclineLinkTextProps {
  label: string;
  onClick: () => void;
  color?: string;
}

export const ButtonDeclineLinkText: React.FC<ButtonDeclineLinkTextProps> = (props) => {
  const { label, onClick, color = '' } = props;

  return (
    <div>
      <span
        role='button'
        tabIndex={0}
        className={`font-primary-regular font-grey-color cursor-pointer text-xs ${styles.label}`}
        onClick={() => onClick()}
        onKeyDown={() => onClick()}
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
};
