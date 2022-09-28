import React, { useState } from 'react';

// third party components
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// storybook components
import { UserState } from 'redux/reducers/userState';
import { DropdownInvitePatientsButton } from 'stories/Button/DropdownInvitePatientsButton';
import { Logo } from '../../Logo';
import { InputSearchbox } from '../../Input/InputSearchbox';
import { DropdownNotificationButton } from '../../Button/DropdownNotificationButton';
import { DropdownMenuButton } from '../../Button/DropdownMenuButton';
import { DropdownNavMenuButton } from '../../Button/DropdownNavMenuButton';

// images and icons
import IconBellBadge from '../../assets/icons/Icon_Bell_Badge.svg';
import AvatarImage from '../../assets/images/avatar.png';
import IconHamburgerMenuBlack from '../../assets/icons/Icon_Hamburger_Menu_Black.svg';

// json
import NotificationList from '../../assets/json/notification.json';

// styles
import styles from './index.module.scss';

interface MerchantHeaderProps {
  viewport: string;
  pathname: string;
  gotoPath: (path: string) => void;
}

export const MerchantHeader = ({ viewport, pathname, gotoPath }: MerchantHeaderProps) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const [openNotification, setOpenNotification] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const [openInvitePatients, setOpenInvitePatients] = useState(false);
  const { userDetails } = useSelector((state: any) => state.userInfo as UserState);

  const navigate = useNavigate();
  let name = '';
  if (userDetails) {
    name =
      userDetails.first_name || userDetails.last_name
        ? `${userDetails.first_name || ''} ${userDetails.last_name || ''}`
        : 'User Profile';
  }

  const [email, setEmail] = useState('');
  const [emailValidate, setEmailValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  // phone
  const [phone, setPhone] = useState('');
  const [phoneValidate, setPhoneValidate] = useState({
    count: 0,
    success: true,
    type: '',
  });

  const getPhone = (value: string) => {
    setPhone(value);
  };

  const handleInvitePatients = () => {};

  return viewport === 'desktop' ? (
    <div className={styles.container}>
      <div className='flex'>
        <Logo onClick={() => gotoPath('/merchant/dashboard')} />
        {/* <div className='ml-20'>
          <InputSearchbox
            placeholder='Search'
            getValue={(value: string) => setSearchKeyword(value)}
            value={searchKeyword}
          />
        </div> */}
      </div>
      <div className='flex'>
        <DropdownInvitePatientsButton
          title='Invite Patients'
          email={email}
          phone={phone}
          emailValidate={emailValidate}
          phoneValidate={phoneValidate}
          getEmail={(value: string) => setEmail(value)}
          getPhone={(value: string) => setPhone(value)}
          onClick={() => setOpenInvitePatients(!openInvitePatients)}
          onClickViewPage={() => navigate('/merchant/invite-patients')}
          onClickInvitePatients={() => handleInvitePatients()}
          open={openInvitePatients}
          size='h48'
        />
        <div className='ml-4'>
          <DropdownNotificationButton
            data={NotificationList}
            open={openNotification}
            icon={IconBellBadge}
            onClick={() => setOpenNotification(!openNotification)}
          />
        </div>
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
        <DropdownInvitePatientsButton
          title='Invite Patients'
          email={email}
          phone={phone}
          emailValidate={emailValidate}
          phoneValidate={phoneValidate}
          getEmail={(value: string) => setEmail(value)}
          getPhone={(value: string) => setPhone(value)}
          onClick={() => setOpenInvitePatients(!openInvitePatients)}
          onClickViewPage={() => navigate('/merchant/invite-patients')}
          onClickInvitePatients={() => handleInvitePatients()}
          open={openInvitePatients}
          size='h48'
        />
      </div>
      <div className='flex justify-end'>
        <div>
          <DropdownNotificationButton
            data={NotificationList}
            open={openNotification}
            icon={IconBellBadge}
            onClick={() => setOpenNotification(!openNotification)}
            size='h32'
          />
        </div>
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
