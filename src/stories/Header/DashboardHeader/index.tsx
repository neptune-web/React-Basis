import React, { useState } from 'react';

// third party components
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// storybook components
import { UserState } from 'redux/reducers/userState';
import { Logo } from '../../Logo';
import { InputSearchbox } from '../../Input/InputSearchbox';
import { DropdownNotificationButton } from '../../Button/DropdownNotificationButton';
import { DropdownMenuButton } from '../../Button/DropdownMenuButton';
import { DropdownNavMenuButton } from '../../Button/DropdownNavMenuButton';
import { Button } from '../../Button';

// images and icons
import IconBellBadge from '../../assets/icons/Icon_Bell_Badge.svg';
import AvatarImage from '../../assets/images/avatar.png';
import IconHamburgerMenuBlack from '../../assets/icons/Icon_Hamburger_Menu_Black.svg';

// json
import NotificationList from '../../assets/json/notification.json';

// styles
import styles from './index.module.scss';

interface DashboardHeaderProps {
  viewport: string;
  pathname: string;
  gotoPath: (path: string) => void;
}

export const DashboardHeader = ({ viewport, pathname, gotoPath }: DashboardHeaderProps) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const { userDetails } = useSelector((state: any) => state.userInfo as UserState);
  let name = '';
  if (userDetails) {
    name =
      userDetails.first_name || userDetails.last_name
        ? `${userDetails.first_name || ''} ${userDetails.last_name || ''}`
        : 'User Profile';
  }

  return viewport === 'desktop' ? (
    <div className={styles.container}>
      <div className='flex'>
        <Logo onClick={() => gotoPath('/dashboard')} />
        {/* <div className='ml-20'>
          <InputSearchbox
            placeholder='Search'
            getValue={(value: string) => setSearchKeyword(value)}
            value={searchKeyword}
          />
        </div> */}
      </div>
      <div className='flex'>
        <Button title='Pay Now' onClick={() => gotoPath('/dashboard/pay-now')} size='h48' />
        {/* <div className='ml-4'>
          <DropdownNotificationButton
            data={NotificationList}
            open={openNotification}
            icon={IconBellBadge}
            onClick={() => setOpenNotification(!openNotification)}
          />
        </div> */}
        <div className='ml-4'>
          <DropdownMenuButton
            avatar={AvatarImage}
            name={name}
            onClick={() => setOpenProfile(!openProfile)}
            onMenuClick={(path: string) => gotoPath(path)}
            open={openProfile}
          />
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <div className='flex justify-start items-center'>
        <div className='w-8 h-8 mr-4'>
          <DropdownNavMenuButton
            viewport={viewport}
            pathname={pathname}
            gotoPath={(path: string) => gotoPath(path)}
            open={openDropdownMenu}
            icon={IconHamburgerMenuBlack}
            onClick={() => {
              setOpenDropdownMenu(!openDropdownMenu);
            }}
            size='h32'
          />
        </div>
        <Button title='Pay Now' onClick={() => gotoPath('/dashboard/pay-now')} size='h32' />
      </div>
      <div className='flex justify-end'>
        {/* <div>
          <DropdownNotificationButton
            data={NotificationList}
            open={openNotification}
            icon={IconBellBadge}
            onClick={() => setOpenNotification(!openNotification)}
            size='h32'
          />
        </div> */}
        <div className='ml-4'>
          <DropdownMenuButton
            avatar={AvatarImage}
            name={name}
            onClick={() => setOpenProfile(!openProfile)}
            onMenuClick={(path: string) => gotoPath(path)}
            open={openProfile}
            size='h32'
          />
        </div>
      </div>
    </div>
  );
};
