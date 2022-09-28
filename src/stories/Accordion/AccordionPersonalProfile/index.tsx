import React, { useState } from 'react';

// storybook components
import { CardPersonalInfo } from '../../Card/CardPersonalInfo';

// styles
import styles from './index.module.scss';

interface JsonObject {
  id: number;
  title: string;
  content: {
    providerName: string;
    location: string;
    phoneNumber: string;
    role: string;
    admin: string;
    description: string;
  };
  color: string;
  backgroundColor: string;
}

interface AccordionPersonalProfileProps {
  data: JsonObject;
}

export const AccordionPersonalProfile: React.FC<AccordionPersonalProfileProps> = (props) => {
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
          <div className='font-secondary-bold text-lg ml-8'>{data.title}</div>
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
          <CardPersonalInfo
            providerName={data.content.providerName}
            location={data.content.location}
            phoneNumber={data.content.phoneNumber}
            role={data.content.role}
            admin={data.content.admin}
            description={data.content.description}
            backgroundColor={data.backgroundColor}
            color={data.color}
          />
        </div>
      </div>
    </div>
  );
};
