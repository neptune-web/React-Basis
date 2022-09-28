import React from 'react';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// storybook components
import { CardRepaymentAlarm } from 'stories/Card/CardRepaymentAlarm';
import { TableMissedRepayment } from 'stories/Table/TableMissedRepayment';
import { TableRepaymentLedger } from 'stories/Table/TableRepaymentLedger';

// json
import MissedRepaymentList from 'stories/assets/json/missed-repayment.json';
import RepaymentLedgerList from 'stories/assets/json/repayment-ledger.json';

// styles
import styles from './index.module.scss';

const Repayments = () => {
  const navigate = useNavigate();
  const viewport = useSelector((state: any) => state.device.viewport);

  return (
    <div className={styles.container}>
      <div className='w-full font-secondary-bold text-[24px]'>Repayments Ledger</div>
      <div className='w-full mt-6'>
        <CardRepaymentAlarm
          label01='YOU HAVE MISSED 3 REPAYMENTS.'
          label02='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus lacus habitant ullamcorper at. Ipsum ut tellus ut feugiat viverra.'
          onClick={() => navigate('/dashboard/pay-now')}
          viewport={viewport}
        />
      </div>
      <div className='w-full overflow-x-auto mt-4'>
        <TableMissedRepayment
          data={MissedRepaymentList}
          onClick={(path: string) => navigate(path)}
        />
      </div>
      <div className='w-full overflow-x-auto mt-9'>
        <TableRepaymentLedger
          data={RepaymentLedgerList}
          viewport={viewport}
          onClick={(path: string) => navigate(path)}
        />
      </div>
    </div>
  );
};

export default Repayments;
