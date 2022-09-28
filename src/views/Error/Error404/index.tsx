import React from 'react';

// third party components
import { useNavigate } from 'react-router-dom';

// storybook components
import { Button } from 'stories/Button';

// images and icons
import Error404Image from 'stories/assets/images/error-404.svg';

// styles
import styles from './index.module.scss';

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className={styles.container}>
        <div className='w-full relative'>
          <div className={`font-primary-bold font-primary-blue-color ${styles.title}`}>
            ERROR 404
          </div>
          <div
            className={`font-primary-bold font-primary-dark-blue-color mt-12 ${styles.subTitle}`}
          >
            There’s NOTHING here...
          </div>
          <div className='font-primary-bold font-primary-dark-blue-color text-[18px] mt-[26px] max-w-[465px]'>
            Maybe the page you are looking for is not found or never existed
          </div>
        </div>
        <div className={styles.imageArea}>
          <img src={Error404Image} alt='' />
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

export default Error404;
