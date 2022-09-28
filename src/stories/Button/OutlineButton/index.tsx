import React from 'react';

// styles
import styles from './index.module.scss';

interface OutlineButtonProps {
  hasArrow?: boolean;
  disabled?: boolean;
  title: string;
  fullWidth?: boolean;
  onClick?: () => void;
  color?: string;
  borderColor?: string;
  backgroundColor?: string;
  height?: string;
  fontSize?: string;
  borderRadius?: string;
  size?: string;
}

export const OutlineButton = ({
  hasArrow = false,
  disabled = false,
  title,
  fullWidth = false,
  onClick,
  color = '',
  borderColor = '',
  backgroundColor = '',
  height = '',
  fontSize = '',
  borderRadius = '',
  size = '',
  ...props
}: OutlineButtonProps) => (
  <button
    type='submit'
    className={`${styles.button} ${
      size === 'h54'
        ? styles.h54
        : size === 'h48'
        ? styles.h48
        : size === 'h40'
        ? styles.h40
        : size === 'h32'
        ? styles.h32
        : size === 'h22'
        ? styles.h22
        : ''
    }`}
    style={{
      width: `${fullWidth ? '100%' : ''}`,
      color,
      borderColor,
      backgroundColor,
      height,
      fontSize,
      borderRadius,
    }}
    disabled={disabled}
    onClick={onClick}
  >
    {hasArrow ? (
      <>
        <p>{title}</p>
        <div className={styles.rightArrow} />
      </>
    ) : (
      title
    )}
  </button>
);
