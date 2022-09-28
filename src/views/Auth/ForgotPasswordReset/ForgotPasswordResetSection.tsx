import React from 'react';

// storybook components
import { Image } from 'stories/Image';
import { Button } from 'stories/Button';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// lotties
import ResetPasswordLink from 'stories/assets/lotties/reset-password-link.json';

// styles
import { ResetPasswordData } from 'redux/reducers/userResetPassword';
import styles from './ForgotPasswordResetSection.module.scss';

const ForgotPasswordResetSection = () => {
  const navigate = useNavigate();

  const viewport = useSelector((state: any) => state.device.viewport);
  const userResetPasswordData = useSelector(
    (state: any) => state.userResetPassword.user as ResetPasswordData
  );

  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClickContinue = () => {
    navigate('/reset-password');
  };

  return (
    <div className={styles.container}>
      <div className={styles.emailIconContainer}>
        <Image
          src={ResetPasswordLink}
          width={viewport === 'mobile' ? 249 : 300}
          height={viewport === 'mobile' ? 249 : 300}
        />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.formTitle}>
          <h3 className='text-[32px] font-secondary'>Reset&nbsp;</h3>
          <h3 className='text-[32px] font-secondary-bold font-green-color'>Password Link</h3>
        </div>
        <div className='text-center font-grey-color'>
          {`A Password Reset Link has been sent to your email address ${
            userResetPasswordData ? userResetPasswordData.email : ''
          }`}
        </div>
        <div className={styles.buttonArea}>
          <Button title='Continue' hasArrow fullWidth onClick={handleClickContinue} />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordResetSection;
