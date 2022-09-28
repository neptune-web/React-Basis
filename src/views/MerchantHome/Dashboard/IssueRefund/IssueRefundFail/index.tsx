import React from 'react';

// third party components
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// storybook components
import { ButtonBack } from 'stories/Button/ButtonBack';
import { CardIssueRefundFail } from 'stories/Card/CardIssueRefundFail';

// styles
import styles from './index.module.scss';

const IssueRefundFail = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  const navigate = useNavigate();

  const handleSumbit = () => {
    navigate('/merchant/dashboard/issue-refund');
  };

  return (
    <div className={styles.container}>
      {viewport === 'mobile' && (
        <div className='absolute top-16 left-5 mt-[22px] mb-[36px]'>
          <ButtonBack onClick={() => handleSumbit()} viewport={viewport} />
        </div>
      )}
      <CardIssueRefundFail refundAmount={100} viewport={viewport} onClick={() => handleSumbit()} />
    </div>
  );
};

export default IssueRefundFail;
