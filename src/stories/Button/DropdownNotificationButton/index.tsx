import React, { useEffect, useRef } from 'react';

// styles
import styles from './index.module.scss';

interface NotificationDataArray {
  id: number;
  avatar: string;
  title: string;
  time: string;
  description: string;
}

interface ButtonProps {
  data: NotificationDataArray[];
  disabled?: boolean;
  icon: any;
  onClick?: () => void;
  size?: string;
  open: boolean;
}

export const DropdownNotificationButton = ({
  data,
  disabled = false,
  icon,
  onClick = () => {},
  size = '',
  open,
  ...props
}: ButtonProps) => {
  const closeRef = useRef<HTMLDivElement>(null);

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
      <button
        type='button'
        className={`${styles.button} ${size === 'h32' ? styles.h32 : ''}`}
        disabled={disabled}
        onClick={onClick}
      >
        <img src={icon} alt='' width={24} height={24} />
      </button>
      {open && (
        <div className={styles.container}>
          <div className={styles.menuArea} ref={closeRef}>
            <div className={styles.titleArea}>
              <div className='ml-6 font-primary-semibold font-black-color text-sm'>
                Notification
              </div>
              <div className='flex font-primary-medium font-grey-color text-xs cursor-pointer'>
                <div>View All</div>
                <div className='ml-[14px] mr-6'>Mark All Read</div>
              </div>
            </div>
            <div className={styles.menuItem}>
              {data.map((item, index) => (
                <div key={index} className={styles.menuItemArea}>
                  <img
                    src={`${item.avatar}/${Math.random()}`}
                    alt=''
                    className='w-10 h-10 rounded-full object-cover bg-gray-400'
                  />
                  <div className='flex-1 ml-[14px] mr-[30px]'>
                    <div className='w-full flex justify-between items-center'>
                      <div className='font-primary-medium font-black-color text-sm'>
                        {item.title}
                      </div>
                      <div className='font-primary-medium font-grey-color text-[10px]'>
                        {item.time}
                      </div>
                    </div>
                    <div className='w-full font-primary-medium font-grey-color text-xs mt-3 truncate'>
                      {item.description}
                    </div>
                  </div>
                  <div className={styles.divider} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
