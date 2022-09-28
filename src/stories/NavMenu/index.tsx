import React from 'react';

// images and icons
import { useSelector } from 'react-redux';
import { UserState } from 'redux/reducers/userState';
import IconLeftArrow from '../assets/icons/Icon_Left_Arrow.svg';
import SupportImage from '../assets/images/support.svg';
import IconDashboardBlack from '../assets/icons/Icon_Dashboard_Black.svg';
import IconDashboardGreen from '../assets/icons/Icon_Dashboard_Green.svg';
import IconRepaymentBlack from '../assets/icons/Icon_Repayment_Black.svg';
import IconRepaymentGreen from '../assets/icons/Icon_Repayment_Green.svg';
import IconPurchaseBlack from '../assets/icons/Icon_Purchase_Black.svg';
import IconPurchaseGreen from '../assets/icons/Icon_Purchase_Green.svg';
import IconCalculatorBlack from '../assets/icons/Icon_Calculator_Black.svg';
import IconCalculatorGreen from '../assets/icons/Icon_Calculator_Green.svg';
import IconSettingBlack from '../assets/icons/Icon_Setting_Black.svg';
import IconSettingGreen from '../assets/icons/Icon_Setting_Green.svg';
import IconStatementsBlack from '../assets/icons/Icon_Statements_Black.svg';
import IconStatementsGreen from '../assets/icons/Icon_Statements_Green.svg';
import IconEmailBlack from '../assets/icons/Icon_Email.svg';
import IconEmailGreen from '../assets/icons/Icon_Email_Green.svg';

// storybook components
import { NavMenuItemButton } from '../Button/NavMenuItemButton';
import { IconButton } from '../Button/IconButton';

// styles
import styles from './index.module.scss';

interface NavMenuProps {
  viewport: string;
  pathname: string;
  gotoPath: (path: string) => void;
  onClick?: () => void;
}

export const NavMenu = ({ viewport, pathname, gotoPath, onClick = () => {} }: NavMenuProps) => {
  const { userDetails } = useSelector((state: any) => state.userInfo as UserState);

  const isCustomer = userDetails && userDetails.userType === 'customer';
  const isMerchant = userDetails && userDetails.userType === 'merchant';

  // ----temp value for merchant dev -------
  // const isCustomer = false;
  // const isMerchant = true;

  const NavMenuOptions = (): {
    icon: string;
    title: string;
    onClick: () => void;
    active: boolean;
  }[] => {
    if (isCustomer) {
      return [
        {
          title: 'Dashboard',
          icon: pathname === '/dashboard' ? IconDashboardGreen : IconDashboardBlack,
          onClick: () => {
            onClick();
            gotoPath('/dashboard');
          },
          active: pathname === '/dashboard',
        },

        {
          icon: pathname === '/dashboard/repayments' ? IconRepaymentGreen : IconRepaymentBlack,
          title: 'Repayments',
          onClick: () => {
            onClick();
            gotoPath('/dashboard/repayments');
          },
          active: pathname === '/dashboard/repayments',
        },
        {
          icon:
            pathname === '/dashboard/loans' || pathname === '/dashboard/loans/repayment'
              ? IconPurchaseGreen
              : IconPurchaseBlack,

          title: 'Loans',
          onClick: () => {
            onClick();
            gotoPath('/dashboard/loans');
          },
          active: pathname === '/dashboard/loans' || pathname === '/dashboard/loans/repayment',
        },
        {
          icon: pathname === '/dashboard/calculator' ? IconCalculatorGreen : IconCalculatorBlack,
          title: 'Fin Calculator',
          onClick: () => {
            onClick();
            gotoPath('/dashboard/calculator');
          },
          active: pathname === '/dashboard/calculator',
        },
        {
          icon: pathname === '/dashboard/settings' ? IconSettingGreen : IconSettingBlack,
          title: 'Settings',
          onClick: () => {
            onClick();
            gotoPath('/dashboard/settings');
          },
          active: pathname === '/dashboard/settings',
        },
      ];
    }

    if (isMerchant) {
      return [
        {
          title: 'Dashboard',
          icon: IconDashboardBlack,
          onClick: () => {
            onClick();
            gotoPath('/merchant/dashboard');
          },
          active: pathname === '/merchant/dashboard',
        },
        {
          icon: pathname === '/merchant/statements' ? IconStatementsGreen : IconStatementsBlack,
          title: 'Statements',
          onClick: () => {
            onClick();
            gotoPath('/merchant/statements');
          },
          active: pathname === '/merchant/statements',
        },
        {
          icon: pathname === '/merchant/invite-patients' ? IconEmailGreen : IconEmailBlack,
          title: 'Invite Patients',
          onClick: () => {
            onClick();
            gotoPath('/merchant/invite-patients');
          },
          active: pathname === '/merchant/invite-patients',
        },
        {
          icon: pathname === '/merchant/settings' ? IconSettingGreen : IconSettingBlack,
          title: 'Settings',
          onClick: () => {
            onClick();
            gotoPath('/merchant/settings');
          },
          active: pathname === '/merchant/settings',
        },
      ];
    }

    return [];
  };

  return (
    <div className={viewport === 'desktop' ? styles.container : styles.mobileContainer}>
      <div>
        {viewport !== 'desktop' && (
          <div>
            <div className='flex justify-between items-center ml-[41px] mr-3 mt-[22px] mb-[18px]'>
              <div>Menu</div>
              <IconButton icon={IconLeftArrow} onClick={onClick} size='h32' />
            </div>
            <div className='divider' />
          </div>
        )}
        <div className='flex flex-wrap justify-end'>
          {/* {isCustomer &&
            NavMenuOptions().map((navMenuItem) => (
              <div className='my-2'>
                <NavMenuItemButton
                  icon={navMenuItem.icon}
                  title={navMenuItem.title}
                  onClick={navMenuItem.onClick}
                  active={navMenuItem.active}
                />
              </div>
            ))} */}
          {NavMenuOptions().map((navMenuItem) => (
            <div className='my-2'>
              <NavMenuItemButton
                icon={navMenuItem.icon}
                title={navMenuItem.title}
                onClick={navMenuItem.onClick}
                active={navMenuItem.active}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${viewport === 'desktop' ? 'mx-4 mb-4' : 'ml-[41px] mr-[57px] mb-[61px]'}`}>
        <img src={SupportImage} alt='' width={168} height={140} />
      </div>
    </div>
  );
};
