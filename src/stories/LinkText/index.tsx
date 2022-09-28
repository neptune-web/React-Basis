import React from 'react';

interface LinkTextProps {
  label1: string;
  label2: string;
  handleClickLink: () => void;
  color?: string;
  fontSize?: string;
  fontWeight?: number;
}

export const LinkText: React.FC<LinkTextProps> = (props) => {
  const { label1, label2, handleClickLink, color = '', fontSize = '', fontWeight = '' } = props;

  return (
    <div>
      <span
        className='font-primary-regular font-grey-color'
        style={{ fontSize, fontWeight, color }}
      >
        {label1}&nbsp;
      </span>
      <span
        role='button'
        tabIndex={0}
        className='font-primary-semibold font-green-color cursor-pointer'
        onClick={() => handleClickLink()}
        onKeyDown={() => handleClickLink()}
        style={{ fontSize, fontWeight }}
      >
        {label2}
      </span>
    </div>
  );
};
