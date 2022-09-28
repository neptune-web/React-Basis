import React from 'react';

// styles
import styles from './index.module.scss';

interface ButtonLinkTextUnderlineProps {
  label: string;
  onClick: () => void;
  color?: string;
}

export const ButtonLinkTextUnderline: React.FC<ButtonLinkTextUnderlineProps> = (props) => {
  const { label, onClick, color = '' } = props;

  return (
    <div>
      <span
        role='button'
        tabIndex={0}
        className={`text-sm font-primary-blue-color font-primary-bold cursor-pointer ${styles.label}`}
        onClick={() => onClick()}
        onKeyDown={() => onClick()}
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
};
