import React from 'react';
import { LoanStatus, RepaymentStatus } from '../../utils/commonEnums';

// styles
import styles from './index.module.scss';

interface ChipProps {
  status: LoanStatus | RepaymentStatus | string;
  label: string;
}

export const Chip: React.FC<ChipProps> = (props) => {
  const { status, label = '' } = props;

  const getChipStyle = () => {
    if (status === LoanStatus.REPAYMENT || status === RepaymentStatus.UPCOMING)
      return styles.pending;

    if (status === LoanStatus.DEFAULT) return styles.defaulted;

    if (status === LoanStatus.DELINQUENT) return styles.incomplete;

    if (status === LoanStatus.CANCELLED || status === RepaymentStatus.FAILED)
      return styles.cancelled;

    if (status === LoanStatus.REPAID || status === RepaymentStatus.SUCCESSFUL) return styles.repaid;

    return '';
  };

  return (
    <div
      className={`font-primary-regular text-xs flex justify-center items-center ${
        styles.chip
      } ${getChipStyle()}`}
    >
      {label}
    </div>
  );
};
