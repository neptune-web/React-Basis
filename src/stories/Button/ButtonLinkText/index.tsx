import React from 'react';

// styles
import styles from './index.module.scss';

interface ButtonLinkTextProps {
  label: string;
  onClick: () => void;
  color?: string;
}

export const ButtonLinkText: React.FC<ButtonLinkTextProps> = (props) => {
  const { label, onClick, color = '' } = props;

  return (
    <div>
      <span
        role='button'
        tabIndex={0}
        className={`font-primary-regular font-grey-color cursor-pointer text-lg ${styles.label}`}
        onClick={() => onClick()}
        onKeyDown={() => onClick()}
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
};
