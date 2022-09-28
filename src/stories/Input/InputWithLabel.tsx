import React from 'react';

// styles
import styles from './Input.module.scss';

interface RefundAmountValidateJSON {
  success: boolean;
  type: string;
}

interface InputWithLabelProps {
  label: string;
  refundAmount: string;
  refundAmountValidate: RefundAmountValidateJSON;
  getRefundAmount: (value: string) => void;
  size?: string;
  disabled?: boolean;
}

export const InputWithLabel = (props: InputWithLabelProps) => {
  const { label, refundAmount, refundAmountValidate, disabled, getRefundAmount, size = '' } = props;

  return (
    <div
      className={`${size === 'mobile' ? styles.smallFormControl : styles.formControlWithLabel} ${
        disabled && styles.disable
      }`}
    >
      <label
        htmlFor='Refund amount'
        className={`${
          !refundAmountValidate.success ? 'font-red-color' : 'font-grey-color'
        } font-primary-regular text-xs mb-2`}
      >
        {label}
      </label>
      <div
        className={`${styles.iconInput} ${
          size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
        }`}
      >
        <input
          type='text'
          className={`${!refundAmountValidate.success ? styles.formInputError : styles.formInput} ${
            size === 'h54' ? styles.h54 : size === 'h40' ? styles.h40 : ''
          } font-primary-regular text-xs`}
          placeholder='Enter refund amount'
          value={refundAmount}
          onChange={(event: any) => getRefundAmount(event.target.value)}
          autoComplete='off'
          disabled={disabled}
        />
      </div>
      {!refundAmountValidate.success && refundAmountValidate.type === 'required' && (
        <span className={`${styles.errorMsg} text-right`}>Incorrect amount. Please try again!</span>
      )}
    </div>
  );
};
