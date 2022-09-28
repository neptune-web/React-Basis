import React from 'react';

// lotties
import EmptyIcon from '../../assets/lotties/empty.json';
import { OutlineButton } from '../../Button/OutlineButton';

// storybook components
import { Image } from '../../Image';
import { LinkText } from '../../LinkText';

// styles
import styles from './index.module.scss';

interface CardNoInvitationProps {
  type: string;
  onClick?: () => void;
}

export const CardNoInvitation: React.FC<CardNoInvitationProps> = (props) => {
  const { type, onClick = () => {} } = props;

  return (
    <div className={styles.container}>
      {type === 'all' ? (
        <div className='w-full flex flex-wrap justify-center items-center'>
          <div className='w-full flex justify-center'>
            <h3 className='font-secondary-bold mt-2 mb-2 text-lg'>Oops!&nbsp;</h3>
            <h3 className='font-secondary-bold font-green-color mt-2 mb-2 text-lg'>
              No Invitations Yet
            </h3>
          </div>
          <Image src={EmptyIcon} width={197} height={197} />
          <div className='w-full flex justify-center'>
            <div className='max-w-[333px] text-center'>
              <LinkText
                label1="You don't have any invitations to use Basis. Ask your provider to send you the "
                label2='invitation link.'
                handleClickLink={() => {}}
                color='#000000'
                fontSize='14px'
                fontWeight={300}
              />
            </div>
          </div>
          <div className='w-full flex justify-center mt-[26px] font-primary-regular font-grey-color text-xs'>
            Don't have a provider? We can help you find one.
          </div>
          <div className='w-full flex justify-center mt-4'>
            <div className='w-[126px]'>
              <OutlineButton title='Call Us' onClick={() => onClick()} height='33px' />
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full flex flex-wrap justify-center'>
          <div className='w-full flex justify-center mt-[51px]'>
            <h3 className='font-secondary-bold text-lg'>Woohoo!&nbsp;</h3>
            <h3 className='font-secondary-bold font-green-color text-lg'>No Pending Invitations</h3>
          </div>
        </div>
      )}
    </div>
  );
};
