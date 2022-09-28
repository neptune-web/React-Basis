import React, { useState } from 'react';

// styles
import styles from './index.module.scss';

interface ButtonOutlineIconLabelProps {
  disabled?: boolean;
  title: string;
  icon1: any;
  icon2: any;
  fullWidth?: boolean;
  onClick?: () => void;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  direction?: string;
}

export const ButtonOutlineIconLabel = ({
  disabled = false,
  title,
  icon1,
  icon2,
  fullWidth = false,
  onClick,
  color = '',
  borderColor = '',
  backgroundColor = '',
  width = '',
  height = '',
  fontSize = '',
  borderRadius = '',
  direction = 'ltr',
  ...props
}: ButtonOutlineIconLabelProps) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      type='button'
      className={styles.button}
      style={{
        width: `${fullWidth ? '100%' : width}`,
        color,
        borderColor,
        backgroundColor,
        height,
        fontSize,
        borderRadius,
      }}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      tabIndex={0}
    >
      {direction === 'ltr' ? (
        <>
          <p>{title}</p>
          <img src={hover ? icon2 : icon1} alt='' />
        </>
      ) : (
        <>
          <img src={hover ? icon2 : icon1} alt='' />
          <p>{title}</p>
        </>
      )}
    </button>
  );
};
