import React from 'react';

// storybook components
import { Image } from 'stories/Image';
import { Button } from 'stories/Button';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// lotties
import SuccessfulIcon from 'stories/assets/lotties/successful-icon.json';

// styles
import styles from './ResetPasswordCongratsSection.module.scss';

const ResetPasswordCongratsSection = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);

  const handleContinue = () => {
    navigate('/signin');
  };

  return (
    <div className={styles.container}>
      <div className={styles.successfulIconContainer}>
        <Image
          src={SuccessfulIcon}
          width={viewport === 'mobile' ? 249 : 344}
          height={viewport === 'mobile' ? 249 : 344}
        />
      </div>
      <div className={styles.formContainer}>
        <div className='flex'>
          <h3 className='text-[32px] font-secondary-bold font-grey-color mt-2 mb-2'>
            Congratulations!
          </h3>
        </div>
        <div className='text-center font-grey-color'>Your Password is reset successfully.</div>
        <div className={styles.buttonArea}>
          <Button title='Continue' hasArrow fullWidth onClick={() => handleContinue()} />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordCongratsSection;
