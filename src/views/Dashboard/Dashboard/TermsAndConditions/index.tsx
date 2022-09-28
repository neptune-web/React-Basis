import React, { useRef, useState } from 'react';

// third party components
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// storybook components
import { CardAddress } from 'stories/Card/CardAddress';
import { ButtonBack } from 'stories/Button/ButtonBack';
import { StepLabel } from 'stories/StepLabel';
import { ScrollContentArea } from 'stories/ScrollContentArea';
import { Checkbox } from 'stories/Checkbox';
import { Button } from 'stories/Button';
import { ModalAmountFrequency } from 'stories/Modal/ModalAmountFrequency';

// json data
import terms01Json from 'stories/assets/json/terms-01.json';

// styles
import styles from './index.module.scss';

const TermsAndConditions = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  const navigate = useNavigate();

  const center = {
    lat: 41.8936,
    lng: -87.6722,
  };

  const handleClickBack = () => {
    navigate(-1);
  };

  const [readState, setReadState] = useState(true);

  const listInnerRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (scrollTop + clientHeight >= scrollHeight - 16) {
        setReadState(false);
      } else {
        setReadState(true);
      }
    }
  };

  const [openModal, setOpenModal] = useState(false);

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className={styles.modal}>
        {/* left part */}
        <CardAddress viewport={viewport} center={center} />
        {/* right part */}
        <div className={styles.rightArea}>
          <div className='w-full flex flex-wrap flex-column justify-between'>
            <div className='w-full'>
              <div className='w-full flex justify-between'>
                <ButtonBack onClick={() => handleClickBack()} />
                <StepLabel stepLabel='STEP 04/04' stepTitle='Terms & Conditions' />
              </div>
              <div className='font-primary-medium text-md mt-6'>
                Please Read & Review the terms of this agreement below:
              </div>
              {/* content part */}
              <div className='my-5'>
                <div className={styles.scrollContentArea}>
                  <div
                    className={styles.scrollContentRealArea}
                    onScroll={onScroll}
                    ref={listInnerRef}
                  >
                    <div ref={titleRef}>
                      <ScrollContentArea data={terms01Json} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full mt-5'>
                <Checkbox
                  label='I authorize this and this can be used as my digital signature'
                  onChange={() => {}}
                  disabled={readState}
                />
              </div>
            </div>

            <div className='w-full flex justify-end items-end pt-[62px]'>
              <div className='w-full max-w-[318px]'>
                <Button
                  title='Confirm Loan'
                  hasArrow
                  fullWidth
                  height='58px'
                  onClick={() => setOpenModal(!openModal)}
                  disabled={readState}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalAmountFrequency
        open={openModal}
        onClick={() => setOpenModal(!openModal)}
        viewport={viewport}
      />
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      {/* left part */}
      <CardAddress viewport={viewport} center={center} onClick={() => handleClickBack()} />
      {/* right part */}
      <div className='w-full flex justify-center py-5 mt-5 border-t border-b border-gray-400'>
        <StepLabel stepLabel='STEP 04/04' stepTitle='Terms & Conditions' />
      </div>
      <div className={styles.mobileRightArea}>
        <div className='w-full'>
          <div className='font-primary-medium text-md mt-6'>
            Please Read & Review the terms of this agreement below:
          </div>
          {/* content part */}
          <div className='my-5'>
            <div className={styles.scrollContentArea}>
              <div className={styles.scrollContentRealArea} onScroll={onScroll} ref={listInnerRef}>
                <div ref={titleRef}>
                  <ScrollContentArea data={terms01Json} />
                </div>
              </div>
            </div>
          </div>
          <div className='w-full mt-5'>
            <Checkbox
              label='I authorize this and this can be used as my digital signature'
              onChange={() => {}}
              disabled={readState}
            />
          </div>
        </div>

        <div className='w-full flex justify-end items-end pt-[62px]'>
          <div className='w-full max-w-[318px]'>
            <Button
              title='Confirm Loan'
              hasArrow
              fullWidth
              height='58px'
              onClick={() => setOpenModal(!openModal)}
              disabled={readState}
            />
          </div>
        </div>
      </div>
      <ModalAmountFrequency
        open={openModal}
        onClick={() => setOpenModal(!openModal)}
        viewport={viewport}
      />
    </div>
  );
};

export default TermsAndConditions;
