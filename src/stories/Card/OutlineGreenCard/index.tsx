import React from 'react';

// styles
import styles from './index.module.scss';

interface JSONArray {
  id: number;
  label: string;
  value: string;
}

interface OutlineGreenCardProps {
  title: string;
  data: JSONArray[];
}

export const OutlineGreenCard: React.FC<OutlineGreenCardProps> = (props) => {
  const { title, data } = props;
  return (
    <div className={styles.container}>
      <div className='font-primary-regular font-grey-color text-xs'>{title}</div>

      <div className={styles.tableContainer}>
        {data.map((item, index) => (
          <div className='grid grid-cols-12 mt-3' key={index}>
            <div className='col-span-6 font-primary-regular font-black-color text-[10px]'>
              {item.label}
            </div>
            <div className='col-span-6 font-primary-regular font-black-color text-[10px]'>
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
