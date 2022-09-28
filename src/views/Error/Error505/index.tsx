import React from 'react';

// third party components
import { useNavigate } from 'react-router-dom';

// storybook components
import { Button } from 'stories/Button';

// images and icons
import Error505Image from 'stories/assets/images/error-505.svg';

// styles
import styles from './index.module.scss';

const Error505 = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className={styles.container}>
        <div className='w-full relative'>
          <div className={`font-primary-bold font-primary-blue-color ${styles.title}`}>
            ERROR 505
          </div>
          <div
            className={`font-primary-bold font-primary-dark-blue-color mt-12 ${styles.subTitle}`}
          >
            Sorry! Server Error...
          </div>
          <div className='font-primary-bold font-primary-dark-blue-color text-[18px] mt-[26px] max-w-[465px]'>
            Something went technically wrong. We apolgise & we are fixing the error. Please try
            again later.
          </div>
        </div>
        <div className={styles.imageArea}>
          <img src={Error505Image} alt='' />
        </div>
        <div className={styles.buttonArea}>
          <div className='max-w-[226px]'>
            <Button title='Back to home' hasArrow onClick={() => navigate(-1)} size='48' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error505;
