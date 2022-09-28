import React, { useState } from 'react';

// third party components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Lazy, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// images and icons
import { Repayment } from 'redux/reducers/loansState';
import IconRightArrow from '../../assets/icons/Icon_Right_Arrow.svg';

// styles
import styles from './index.module.scss';

interface SliderLoanRepaymentProps {
  data: Repayment[];
  viewport: string;
  activeIndex: number;
}

export const SliderLoanRepayment: React.FC<SliderLoanRepaymentProps> = (props) => {
  const { data, viewport, activeIndex } = props;

  return (
    <div className='w-full'>
      <div className='w-full flex justify-between mb-8'>
        <div className='font-secondary-bold text-lg'>Loan Repayments</div>
        <div
          className='flex font-primary-medium text-sm cursor-pointer text-base'
          onClick={() => {}}
          onKeyDown={() => {}}
          role='button'
          tabIndex={0}
        >
          View all
          <img src={IconRightArrow} alt='' width={24} height={24} className='ml-2' />
        </div>
      </div>
      <Swiper
        id='swiper'
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // centeredSlides
        className='navigationSwiper'
        loop
        modules={[Autoplay, Lazy, Pagination, Navigation]}
        navigation
        pagination={{
          clickable: true,
          type: 'fraction',
          renderFraction: (currentClass: any, totalClass: any) => {
            return `<div class="font-primary-regular font-grey-color text-xs"><span class="${currentClass}"></span> of <span class="${totalClass}"></span> Repayments</div>`;
          },
        }}
        slidesPerView={viewport === 'mobile' ? 2 : 3}
        spaceBetween={0}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.container}>
              <div className='w-full flex justify-center'>
                <div className={`${styles.card} ${index === activeIndex ? styles.activeCard : ''}`}>
                  <div className={styles.greenBar} />
                  <div className='w-full grid grid-cols-2 gap-1 items-center'>
                    <div className='col-span-1 font-primary-regular font-grey-color text-[10px]'>
                      Next Repayment
                    </div>
                    <div className='col-span-1 font-primary-semibold text-xs'>
                      {item.deductionDate.toLocaleDateString('en-GB', {
                        day: '2-digit',
                        month: '2-digit',
                        year: '2-digit',
                      })}
                    </div>
                  </div>
                  <div className='w-full grid grid-cols-2 gap-1 items-center'>
                    <div className='col-span-1 font-primary-regular font-grey-color text-[10px]'>
                      Amount
                    </div>
                    <div className='col-span-1 font-primary-semibold text-xs'>
                      ${item.deductionAmount}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.greenBar} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
