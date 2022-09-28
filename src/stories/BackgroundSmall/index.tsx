import React from 'react';

// images and icons
import LogoTextIcon from '../assets/icons/Icon_Logo_Text.svg';
import CircleCheckIcon from '../assets/icons/Icon_Circle_Check.svg';
import VectorIcon from '../assets/icons/Icon_Vector_1.svg';

// styles
import styles from './index.module.scss';

// items are necessary for all storybook components
import '../../styles/typography.scss';
import '../../styles/global.scss';

interface BackgroundSmallProps {
  viewport: string;
}

export const BackgroundSmall: React.FC<BackgroundSmallProps> = (props) => {
  const { viewport } = props;

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className={styles.photo_container} />
      <div className={styles.photo_back} />
      <div className={styles.background_content}>
        <div className={styles.logo_container}>
          <img src={LogoTextIcon} alt='logoTextIcon' />
        </div>
        <div className={styles.description_container}>
          <span className='font-third quote-mark'>“</span>
          <div className='font-secondary-color text-left text-[20px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa est massa quis rutrum.
            Facilisis nunc praesent volutpat erat . Egestas pellentesque scelerisque aliquet
            malesuada eget. elementum scelerisque vel pulvinar.
          </div>
          <div className='flex items-center mt-6'>
            <span className='font-secondary-color mr-2'>Vincent Obi</span>
            <img src={CircleCheckIcon} alt='circleCheckIcon' />
          </div>
          <div className='flex justify-right w-full'>
            <img src={VectorIcon} alt='vectorIcon' className='mt-8' />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.container}>
      <div className={styles.photo_container} />
      <div className={styles.photo_back} />
      <div className={styles.mobileBackgroundContent}>
        <div className={styles.logo_container}>
          <img src={LogoTextIcon} alt='logoTextIcon' />
        </div>
      </div>
    </div>
  );
};
