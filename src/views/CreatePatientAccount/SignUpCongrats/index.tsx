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
import styles from './index.module.scss';

const SignUpCongrats = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  const navigate = useNavigate();

  const handleContinue = () => {
    navigate('/setup-profile');
  };

  return (
    <div className={styles.container}>
      <div className={styles.signUpModal}>
        <Image
          src={SuccessfulIcon}
          width={viewport === 'mobile' ? 249 : 342}
          height={viewport === 'mobile' ? 249 : 342}
        />
        <div className={styles.titleArea}>
          <h3 className='text-[32px] font-secondary'>Verification&nbsp;</h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>Successful!</h3>
        </div>
        <div className={styles.buttonArea}>
          <Button title='Continue' hasArrow fullWidth onClick={() => handleContinue()} />
        </div>
      </div>
    </div>
  );
};

export default SignUpCongrats;
