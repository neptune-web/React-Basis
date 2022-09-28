import React, { useState } from 'react';

// storybook components
import { CardFinancingLimit } from '../../Card/CardFinancingLimit';

// styles
import styles from './index.module.scss';

interface JsonObject {
  id: number;
  title: string;
  description: string;
  color: string;
  backgroundColor: string;
}

interface AccordionBasisWorkProps {
  data: JsonObject[];
}

export const AccordionBasisWork: React.FC<AccordionBasisWorkProps> = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.greenBar} />
      <div className={styles.content}>
        <div
          className='w-full flex justify-between items-center'
          role='button'
          onClick={() => setOpen(!open)}
          onKeyDown={() => setOpen(!open)}
          tabIndex={0}
        >
          <div className='font-secondary-bold text-lg ml-8'>How does Basis Work?</div>
          <svg
            width='12'
            height='8'
            viewBox='-2.5 -5 75 60'
            preserveAspectRatio='none'
            className={`cursor-pointer transition duration-150 ease-in-out ${
              open ? 'transform rotate-180' : ''
            }`}
          >
            <path
              d='M0,0 l35,50 l35,-50'
              fill='none'
              stroke='black'
              strokeLinecap='round'
              strokeWidth='15'
            />
          </svg>
        </div>
        <div
          className={`${styles.accordionContent} ${open ? styles.fullHeight : styles.zeroHeight}`}
        >
          <div className='w-full flex flex-wrap gap-[10px] mt-6'>
            {data.map((item, index) => (
              <CardFinancingLimit
                key={index}
                title={item.title}
                description={item.description}
                color={item.color}
                backgroundColor={item.backgroundColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
