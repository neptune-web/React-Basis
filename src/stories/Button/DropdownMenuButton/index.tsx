import React, { useEffect, useRef } from 'react';
import { removeAuthToken, removeRefreshToken } from 'services/authTokenUtils';
import { useDispatch } from 'react-redux';
import { userSignOut } from 'redux/actionCreators/userRegistration';
import { encryptedStorage } from 'services/encryptedStorage';

// images and icons
import IconExpandBlack from '../../assets/icons/Icon_Expand_Black.svg';
import IconLogoutRed from '../../assets/icons/Icon_Logout_Red.svg';

// styles
import styles from './index.module.scss';

interface ButtonProps {
  disabled?: boolean;
  avatar: any;
  name?: string;
  onClick?: () => void;
  onMenuClick?: (path: string) => void;
  size?: string;
  open: boolean;
}

export const DropdownMenuButton = ({
  disabled = false,
  avatar,
  name,
  onClick = () => {},
  onMenuClick = (path: string) => {},
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

  const handleGotoPage = (path: string) => {
    onMenuClick(path);
    onClick();
  };

  const handleLogout = async () => {
    await dispatch(userSignOut() as any);

    encryptedStorage.clearStorage();

    removeAuthToken();
    removeRefreshToken();

    onMenuClick('/signin');
    window.location.reload();
  };

  return (
    <div className='relative'>
      <button
        type='button'
        className={`${styles.buttonStyle} ${size === 'h32' ? styles.h32 : ''}`}
        disabled={disabled}
        onClick={() => onClick()}
      >
        {/* <img src={avatar} alt='' width={30} height={30} /> */}
        <p className='flex px-3'>{name}</p>
        <img src={IconExpandBlack} alt='' width={24} height={24} />
      </button>
      {open ? (
        <div className={styles.container}>
          <div className={styles.menuArea} ref={closeRef}>
            {/* <div
              className={styles.menuItemArea}
              role='button'
              onClick={() => handleGotoPage('/dashboard/settings')}
              onKeyDown={() => handleGotoPage('/dashboard/settings')}
              tabIndex={0}
            >
              My Profile
            </div> */}
            <div
              className={styles.menuItemArea}
              role='button'
              onClick={() => handleGotoPage('/dashboard/settings')}
              onKeyDown={() => handleGotoPage('/dashboard/settings')}
              tabIndex={0}
            >
              Settings
            </div>
            <div
              className={styles.menuItemArea}
              role='button'
              onClick={() => handleGotoPage('/dashboard/settings')}
              onKeyDown={() => handleGotoPage('/dashboard/settings')}
              tabIndex={0}
            >
              Resources
            </div>
            <div className='divider' />
            <div
              className={styles.menuItemArea}
              role='button'
              onClick={() => handleLogout()}
              onKeyDown={() => handleLogout()}
              tabIndex={0}
            >
              Logout <img src={IconLogoutRed} alt='' />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
