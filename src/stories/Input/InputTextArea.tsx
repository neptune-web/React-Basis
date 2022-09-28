import React from 'react';

// styles
import styles from './Input.module.scss';

interface InputTextAreaProps {
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  disabled?: boolean;
}

export const InputTextArea: React.FC<InputTextAreaProps> = (props) => {
  const { placeholder, value, disabled, onChange } = props;

  return (
    <div className={`${styles.commonControl} ${disabled && styles.disable}`}>
      <textarea
        className={styles.textArea}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
