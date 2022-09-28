import React from 'react';

import styles from './index.module.scss';

interface AlertBoxProps {
  isVisible: boolean;
  message: string;
  isError?: boolean;
}

const AlertBox = ({ isVisible = false, message, isError = false }: AlertBoxProps) => {
  if (!isVisible) {
    return <div />;
  }

  return (
    <div
      className={`${styles.container} ${
        isError ? styles.error_container : styles.success_container
      }`}
    >
      <div className={styles.text}>{message}</div>
    </div>
  );
};

export default AlertBox;
