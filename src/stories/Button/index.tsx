import React from 'react';
import ButtonLoader from '../../components/buttonLoader';

// styles
import styles from './index.module.scss';

interface ButtonProps {
  hasArrow?: boolean;
  disabled?: boolean;
  title: string;
  fullWidth?: boolean;
  minWidth?: string;
  width?: string;
  onClick?: () => void;
  size?: string;
  height?: string;
  color?: string;
  fontWeight?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;

  isLoading?: boolean;
}

export const Button = ({
  hasArrow = false,
  disabled = false,
  title,
  fullWidth = false,
  minWidth = '',
  width = '',
  onClick,
  size = '',
  height = '',
  color = '',
  fontWeight = '',
  backgroundColor = '',
  borderColor = '',
  borderRadius = '',
  isLoading = false,
  ...props
}: ButtonProps) => (
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
        : ''
    }`}
    style={{
      minWidth,
      width: fullWidth ? '100%' : width,
      height,
      color,
      fontWeight,
      backgroundColor,
      borderColor,
      borderRadius,
    }}
    disabled={disabled || isLoading}
    onClick={isLoading ? undefined : onClick}
  >
    {isLoading ? (
      <div className='h-full w-full flex justify-center items-center'>
        <ButtonLoader />
      </div>
    ) : hasArrow ? (
      <>
        <p>{title}</p>
        <div className={styles.rightArrow} />
      </>
    ) : (
      title
    )}
  </button>
);
