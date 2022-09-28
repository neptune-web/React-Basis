import React, { useState } from 'react';

// images and icons
import RightArrowGreenIcon from '../../assets/icons/Icon_Right_Arrow_Green.svg';

// styles
import styles from './index.module.scss';

interface JoinUsButtonProps {
  containedIcon: string;
  outlinedIcon: string;
  title: string;
  description: string;
  onClick: () => void;
}

export const JoinUsButton: React.FC<JoinUsButtonProps> = (props) => {
  const { containedIcon, outlinedIcon, title, description, onClick } = props;
  const [isMouseHover, setIsMouseHover] = useState(false);

  return (
    <button
      type='button'
      className={styles.container}
      onClick={onClick}
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      <div className={styles.content}>
        <img src={isMouseHover ? containedIcon : outlinedIcon} alt='patientIcon' />
        <div className={styles.text}>
          <span className='font-primary-regular text-md text-left mb-1'>{title}</span>
          <span className='font-primary-regular text-sm font-grey-color text-left'>
            {description}
          </span>
        </div>
        {isMouseHover && <img src={RightArrowGreenIcon} alt='rightArrowIcon' />}
      </div>
    </button>
  );
};
