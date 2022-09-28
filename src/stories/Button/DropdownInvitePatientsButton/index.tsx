import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

// storybook components
import { InputEmailInvitePatient } from 'stories/Input/InputEmailInvitePatient';
import { InputPhoneInvitePatient } from 'stories/Input/InputPhoneInvitePatient';
import { OutlineButton } from 'stories/Button/OutlineButton';
import { ButtonLinkTextUnderline } from 'stories/Button/ButtonLinkTextUnderline';
import { Button } from '..';

// string constants
import { StringConstatnts } from '../../../utils/stringConstants';

// styles
import styles from './index.module.scss';

interface ButtonProps {
  disabled?: boolean;
  title: string;
  email: string;
  phone: string;
  emailValidate: {
    count: number;
    success: boolean;
    type: string;
  };
  phoneValidate: {
    count: number;
    success: boolean;
    type: string;
  };
  getEmail: (value: string) => void;
  getPhone: (value: string) => void;
  onClick?: () => void;
  onClickViewPage: () => void;
  onClickInvitePatients: () => void;
  size?: string;
  open: boolean;
}

export const DropdownInvitePatientsButton = ({
  disabled = false,
  title = '',
  email = '',
  phone = '',
  emailValidate = {
    count: 0,
    success: true,
    type: '',
  },
  phoneValidate = {
    count: 0,
    success: true,
    type: '',
  },
  getEmail = (value: string) => {},
  getPhone = (value: string) => {},
  onClick = () => {},
  onClickViewPage = () => {},
  onClickInvitePatients = () => {},
  size = '',
  open,
  ...props
}: ButtonProps) => {
  const closeRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const useOnClickOutside = (ref: any, handler: any) => {
    useEffect(() => {
      const listener = (event: any) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener('mousedown', listener);
      document.addEventListener('touchstart', listener);
      return () => {
        document.removeEventListener('mousedown', listener);
        document.removeEventListener('touchstart', listener);
      };
    }, [ref, handler]);
  };

  useOnClickOutside(closeRef, () => onClick());

  return (
    <div className='relative'>
      <Button title={title} size={size} onClick={() => onClick()} />
      {open ? (
        <div className={styles.container}>
          <div className={styles.menuArea} ref={closeRef}>
            <div className='font-primary-medium font-primary-black-color text-center text-lg'>
              {StringConstatnts.INVITE_PATIENT_TO_BASIS}
            </div>
            <div className='font-regular-regular font-primary-black-color text-center text-sm mx-[22px] my-[19px]'>
              {StringConstatnts.INVITE_PATIENT_INFO}
            </div>
            <div className={styles.division}>&nbsp;</div>
            <div className='ml-[25px] mt-8'>
              <InputEmailInvitePatient
                label='Email'
                email={email}
                emailValidate={emailValidate}
                getEmail={(event: any) => getEmail(event.target.value)}
                size='h40'
              />
            </div>
            <div className='font-secondary-regular font-grey-color text-center text-xs mt-7'>
              & / Or
            </div>
            <div className='ml-[25px] mt-7'>
              <InputPhoneInvitePatient
                label='Phone Number'
                phone=''
                phoneValidate={phoneValidate}
                getPhone={(value: string) => getPhone(value)}
                size='h40'
              />
            </div>
            <div className='ml-[25px] mt-[47px] mb-[35px] mr-[25px]'>
              <OutlineButton
                title='Invite Patient'
                onClick={() => onClickInvitePatients()}
                fullWidth
                height='50px'
                fontSize='16px'
              />
            </div>
            <div className={styles.division}>&nbsp;</div>
            <div className='ml-[25px] mt-[29px] mr-[27px] text-sm font-primary-blue-color font-secondary-bold'>
              <ButtonLinkTextUnderline
                label={StringConstatnts.VIEW_FULL_PAGE}
                onClick={() => onClickViewPage()}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
