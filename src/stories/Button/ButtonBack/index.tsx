import React, { useState } from 'react';

// images and icons
import BackIconGrey from '../../assets/icons/Icon_Back_Arrow_Grey.svg';
import BackIconWhite from '../../assets/icons/Icon_Back_Arrow_White.svg';
import BackIconGreen from '../../assets/icons/Icon_Back_Arrow_Green.svg';

interface ButtonBackProps {
  onClick: () => void;
  viewport?: string;
}

export const ButtonBack = ({ ...props }: ButtonBackProps) => {
  const { onClick, viewport = 'desktop' } = props;
  const [isHover, setIsHover] = useState(false);

  const onClickButton = () => {
    onClick();
  };

  return (
    <div
      role='button'
      className='flex items-center cursor-pointer'
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      onClick={onClickButton}
      onKeyDown={onClickButton}
      tabIndex={0}
    >
      <img
        src={isHover ? BackIconGreen : viewport === 'mobile' ? BackIconGrey : BackIconGrey}
        alt='backIcon'
      />
      <span
        role='button'
        className={
          isHover
            ? 'font-green-color'
            : viewport === 'mobile'
            ? 'font-grey-color'
            : 'font-grey-color'
        }
      >
        Back
      </span>
    </div>
  );
};
