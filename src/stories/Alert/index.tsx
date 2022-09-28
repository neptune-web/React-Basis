import React, { useEffect, useState } from 'react';

// styles
import styles from './index.module.scss';

interface AlertProps {
  label: string;
  color?: string;
  backgroundColor?: string;
  delay?: number;
  onTimeOut: () => void;
}

export const Alert: React.FC<AlertProps> = (props) => {
  const { label, color = '', backgroundColor = '', delay = 5000, onTimeOut } = props;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1000;
      if (count >= delay) {
        setOpen(false);
        onTimeOut();
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return open ? (
    <div className={styles.container}>
      <div
        className='font-primary-regular font-white-color text-sm'
        style={{ color, backgroundColor }}
      >
        {label}
      </div>
    </div>
  ) : null;
};
