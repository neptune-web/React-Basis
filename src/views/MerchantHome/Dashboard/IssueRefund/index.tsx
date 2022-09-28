import React, { useState } from 'react';

// third party components
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// storybook component
import { ButtonBack } from 'stories/Button/ButtonBack';
import { Button } from 'stories/Button';
import { CheckboxCircle } from 'stories/Checkbox/CheckboxCircle';
import { InputTextArea } from 'stories/Input/InputTextArea';
import { InputWithLabel } from 'stories/Input/InputWithLabel';
import { CheckboxOutline } from 'stories/Checkbox/CheckboxOutline';

// images and icons
import EmojiCreditLimitFailure from 'stories/assets/images/Emoji_Credit_Limit_Failure.png';

// string constants
import { StringConstatnts } from '../../../../utils/stringConstants';

// styles
import styles from './index.module.scss';

const IssueRefund = () => {
  const viewport = useSelector((state: any) => state.device.viewport);

  const [isLoading, setIsLoading] = useState(false);

  const [loanID, setLoanID] = useState('BAS1001');
  const [patientName, setPatientName] = useState('Pravin Tambe');
  const [loanDate, setLoanDate] = useState('02 Feb, 2022');
  const [amountChecked, setAmountChecked] = useState(true);
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState('');
  const [refundAmount, setRefundAmount] = useState('');
  const [refundAmountValidate, setRefundAmountValidate] = useState({
    success: true,
    type: '',
  });

  const navigate = useNavigate();

  const handleIssueRefund = () => {
    navigate('/merchant/dashboard/issue-refund/fail');
  };

  const handleAmountChecked = (e: boolean) => {
    setAmountChecked(e);
  };

  const handleCommentChecked = (e: boolean) => {
    setIsComment(e);
  };

  const handleRefundAmount = (value: string) => {
    setRefundAmount(value);

    // check for refund amount validation
    if (value > '$1000') {
      const data = {
        success: false,
        type: 'required',
      };
      setRefundAmountValidate(data);
    }
  };

  const handleCommentChange = (value: string) => {
    setComment(value);
  };

  return viewport !== 'mobile' ? (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.greenBar} />
        <div className='w-full flex justify-between mt-11 relative'>
          <div className='absolute top-1 left-0 mt-2'>
            <ButtonBack onClick={() => navigate('/merchant/dashboard')} viewport={viewport} />
          </div>
          <div className='w-full text-center text-[32px] font-primary-blue-color font-secondary-bold'>
            {StringConstatnts.ISSUE_REFUND}
          </div>
        </div>
        <div className={styles.content}>
          <div className='font-primary-regular font-primary-color text-[22px] lg:text-sm text-center mt-[18px] mb-8'>
            {StringConstatnts.ISSUE_REFUND_INFO}
          </div>
          <div className={styles.division} />
          <div className='w-full flex flex-wrap justify-center my-5 gap-16'>
            <div className='grid grid-rows-2'>
              <div className='row-1 font-primary-regular font-primary-blue-color text-xs text-center'>
                {StringConstatnts.LOAN_ID}
              </div>
              <div className='row-2 font-primary-regular font-primary-color text-sm text-center'>
                {loanID}
              </div>
            </div>
            <div className='grid grid-rows-2'>
              <div className='row-1 font-primary-regular font-primary-blue-color text-xs text-center'>
                {StringConstatnts.PATIENT_NAME}
              </div>
              <div className='row-2 font-primary-regular font-primary-color text-sm text-center'>
                {patientName}
              </div>
            </div>
            <div className='grid grid-rows-2'>
              <div className='row-1 font-primary-regular font-primary-blue-color text-xs text-center'>
                {StringConstatnts.LOAN_DATE}
              </div>
              <div className='row-2 font-primary-regular font-primary-color text-sm text-center'>
                {loanDate}
              </div>
            </div>
          </div>
          <div className={styles.division} />
          <div className='w-full flex justify-between mb-9'>
            <div className='mt-9'>
              <div className='font-primary-regular font-primary-blue-color text-xs'>
                {StringConstatnts.LOAN_AMOUNT}
              </div>
              <div className='mt-9 font-primary-regular font-primary-blue-color text-xs'>
                {StringConstatnts.QUESTION_FOR_REFUND}
              </div>
            </div>
            <div className='w-full max-w-[280px] mt-9'>
              <div className='font-primary-regular font-primary-color text-sm'>$1000.00</div>
              <div className='mt-[34px]'>
                <div className='flex items-center'>
                  <CheckboxCircle
                    value={amountChecked}
                    label={
                      <>
                        ${StringConstatnts.FULL_AMOUNT_OF}
                        <span className='font-primary-bold font-primary-color text-sm'>
                          &nbsp;$1000
                        </span>
                      </>
                    }
                    onChange={(e: boolean) => handleAmountChecked(true)}
                  />
                </div>
                <div className='mt-5'>
                  <CheckboxCircle
                    value={!amountChecked}
                    label={<span>{StringConstatnts.ENTER_CUSTOM_AMOUNT}</span>}
                    onChange={(e: boolean) => handleAmountChecked(false)}
                  />
                </div>
                <div className='mt-5'>
                  <InputWithLabel
                    label={StringConstatnts.REFUND_AMOUNT}
                    disabled={amountChecked}
                    refundAmount={refundAmount}
                    getRefundAmount={(value) => handleRefundAmount(value)}
                    refundAmountValidate={refundAmountValidate}
                    size='h54'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.division} />
          <div className='w-full flex justify-between mb-7'>
            <div className='mt-8'>
              <div className='font-primary-regular font-primary-blue-color text-xs'>
                {StringConstatnts.NEW_LOAN_AMOUNT}
              </div>
            </div>
            <div className='w-full max-w-[280px] mt-8'>
              <div className='font-primary-bold font-green-color text-lg'>$900.00</div>
            </div>
          </div>
          <div className={styles.division} />
          <div className='w-full flex justify-between my-7'>
            <div>
              <CheckboxOutline
                label={StringConstatnts.COMMENTS_OR_NOTES}
                onChange={(e: boolean) => handleCommentChecked(e)}
              />
            </div>
            <div className='w-full max-w-[280px]'>
              <InputTextArea
                value={comment}
                disabled={!isComment}
                placeholder='Type Here...'
                onChange={(value) => handleCommentChange(value)}
              />
            </div>
          </div>
          <div className='w-full flex justify-center mb-[30px]'>
            <Button
              title='Issue Refund'
              onClick={() => handleIssueRefund()}
              size='h40'
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className={styles.greenBar} />
      </div>
    </div>
  ) : (
    <div className={styles.mobileContainer}>
      <div className='ml-8'>
        <ButtonBack onClick={() => navigate('/merchant/dashboard')} viewport={viewport} />
      </div>
      <div className='w-full text-center text-2xl font-primary-blue-color font-secondary-bold mt-6'>
        {StringConstatnts.ISSUE_REFUND}
      </div>
      <div className='font-primary-regular font-primary-color text-sm text-center my-5 px-6'>
        {StringConstatnts.ISSUE_REFUND_INFO}
      </div>
      <div className='w-full flex flex-wrap gap-8 justify-between mx-6 bg-white rounded-3xl p-10'>
        <div>
          <div className='font-primary-regular font-primary-blue-color italic text-xs'>
            {StringConstatnts.LOAN_AMOUNT}
          </div>
          <div className='font-primary-bold font-green-color text-base'>$1000.00</div>
        </div>
        <div>
          <div className='font-primary-regular font-primary-blue-color italic text-xs'>
            {StringConstatnts.REFUND_AMOUNT}
          </div>
          <div className='font-primary-bold font-green-color text-base'>$100.00</div>
        </div>
        <div>
          <div className='font-primary-regular font-primary-blue-color italic text-xs'>
            {StringConstatnts.NEW_AMOUNT}
          </div>
          <div className='font-primary-bold font-green-color text-base'>$900.00</div>
        </div>
        <div>
          <div className='font-primary-regular font-primary-blue-color italic text-xs'>
            {StringConstatnts.PATIENT_NAME}
          </div>
          <div className='font-primary-medium font-primary-color text-sm'>Pravin&nbsp;Tambe</div>
        </div>
        <div className='flex flex-wrap gap-16 justify-between'>
          <div>
            <div className='font-primary-regular font-primary-blue-color italic text-xs'>
              {StringConstatnts.LOAN_DATE}
            </div>
            <div className='font-primary-medium font-primary-color text-sm'>{loanDate}</div>
          </div>
          <div>
            <div className='font-primary-regular font-primary-blue-color italic text-xs'>
              {StringConstatnts.LOAN_ID}
            </div>
            <div className='font-primary-medium font-primary-color text-sm'>{loanID}</div>
          </div>
        </div>
      </div>
      <div className='w-full mx-[14px] bg-white rounded-[41px] px-8 mt-7'>
        <div className={styles.mobileGreenBar} />
        <div className='font-primary-regular font-primary--color text-base text-center mt-[62px]'>
          {StringConstatnts.QUESTION_FOR_REFUND}
        </div>
        <div className='w-full max-w-[280px] mt-9'>
          <div className='mt-[34px]'>
            <div className='flex items-center'>
              <CheckboxCircle
                value={amountChecked}
                label={StringConstatnts.FULL_AMOUNT_OF}
                onChange={(e: boolean) => handleAmountChecked(e)}
              />
              <span className='font-primary-bold font-primary-color text-sm'>&nbsp;$1000</span>
            </div>
            <div className='mt-5'>
              <CheckboxCircle
                value={!amountChecked}
                label={StringConstatnts.ENTER_CUSTOM_AMOUNT}
                onChange={(e: boolean) => handleAmountChecked(e)}
              />
            </div>
            {!amountChecked && (
              <div className='mt-5'>
                <InputWithLabel
                  label={StringConstatnts.REFUND_AMOUNT}
                  refundAmount={refundAmount}
                  getRefundAmount={(value) => handleRefundAmount(value)}
                  refundAmountValidate={refundAmountValidate}
                  size='h54'
                />
              </div>
            )}
            <div className='w-full max-w-[280px] my-10'>
              <InputTextArea
                value={comment}
                placeholder='Type Here...'
                onChange={(value) => handleCommentChange(value)}
              />
            </div>
            <div className='w-full flex justify-center mb-12'>
              <Button
                title='Issue Refund'
                onClick={() => handleIssueRefund()}
                size='h40'
                isLoading={isLoading}
              />
            </div>
            <div className={styles.mobileGreenBar} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueRefund;
