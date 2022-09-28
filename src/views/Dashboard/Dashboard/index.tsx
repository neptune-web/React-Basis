import React, { useEffect, useState } from 'react';

// third party components
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// storybook components
import { CardCreditLimit } from 'stories/Card/CardCreditLimit';
import { ModalLoanGeneration01 } from 'stories/Modal/ModalLoanGeneration01';
import { ModalLoanGeneration02 } from 'stories/Modal/ModalLoanGeneration02';
import { ModalLoanGeneration03 } from 'stories/Modal/ModalLoanGeneration03';
import { ModalLoanGeneration04 } from 'stories/Modal/ModalLoanGeneration04';
import { ModalLoanGeneration05 } from 'stories/Modal/ModalLoanGeneration05';
import { ModalLoanGeneration06 } from 'stories/Modal/ModalLoanGeneration06';
import { Tab } from 'stories/Tab';
import { CardInvitation } from 'stories/Card/CardInvitation';
import { CardNoInvitation } from 'stories/Card/CardNoInvitation';
import { CardLeftLine } from 'stories/Card/CardLeftLine';
import { SliderLoanRepayment } from 'stories/Slider/SliderLoanRepayment';
import { AccordionRepaymentCycle } from 'stories/Accordion/AccordionRepaymentCycle';
import { AccordionBasisWork } from 'stories/Accordion/AccordionBasisWork';
import { ModalDisclaimer01 } from 'stories/Modal/ModalDisclaimer01';
import { ModalDisclaimer02 } from 'stories/Modal/ModalDisclaimer02';
import { ModalDecline } from 'stories/Modal/ModalDecline';

// json data
import FinancingLimit from 'stories/assets/json/financing-limit.json';
import InvitationList from 'stories/assets/json/invitation-list.json';
import RepaymentCycleList from 'stories/assets/json/repayment-cycle.json';
import BasisWorkList from 'stories/assets/json/basis-work.json';

// styles
import { Loan, LoanState } from 'redux/reducers/loansState';
import { encryptedStorage } from 'services/encryptedStorage';
import { fetchUserLoans } from 'redux/actionCreators/fetchLoans';
import BaseLoader from 'components/baseLoader';
import styles from './index.module.scss';

const Dashboard = () => {
  const viewport = useSelector((state: any) => state.device.viewport);
  const loansState = useSelector((state: any) => state.loans as LoanState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    success = false,
    loading = false,
    error,
    totalOutStanding,
    activeLoans,
    dashboardRepayments,
  } = loansState;

  useEffect(() => {
    if (!success && !loading && !error) {
      const userUuid = encryptedStorage.getItem('user_uuid');

      if (userUuid) {
        const requestBody = {
          // user_uuid: userUuid,
          user_uuid: 'TestUserUUID-1',
        };

        dispatch(fetchUserLoans(requestBody) as any);
      }
    }
  }, [success, loading, error, dispatch]);

  const [step, setStep] = useState(0);

  // tab variables and functions
  const tabList = [{ label: 'All Invitations' }, { label: 'Accepted' }, { label: 'Declined' }];
  const [activeTab, setActiveTab] = useState(0);
  const handleSelectTab = (index: number) => {
    setActiveTab(index);
  };

  // invitation variables and functions
  const [allInvitations, setAllInvitations] = useState<any[]>([]);
  const [pendingInvitations, setPendingInvitations] = useState<any[]>([]);
  const [acceptedInvitations, setAcceptedInvitations] = useState<any[]>([]);
  const [declinedInvitations, setDeclinededInvitations] = useState<any[]>([]);

  useEffect(() => {
    setAllInvitations(InvitationList);
    const acceptedArray = () => InvitationList.filter((i) => i.status === 2);
    setAcceptedInvitations(acceptedArray);
    const declinedArray = () => InvitationList.filter((i) => i.status === 1);
    setDeclinededInvitations(declinedArray);
    const pendingArray = () => InvitationList.filter((i) => i.status === 0);
    setPendingInvitations(pendingArray);
  }, []);

  // disclaimer
  const [openDisclaimer01, setOpenDisclaimer01] = useState(false);
  const [openDisclaimer02, setOpenDisclaimer02] = useState(false);
  const [openDecline, setOpenDecline] = useState(false);

  if (loading) {
    return (
      <div className='h-full w-full flex justify-center items-center'>
        <BaseLoader />
      </div>
    );
  }

  const showLoanRepaymentSections = dashboardRepayments && dashboardRepayments.length > 0;

  return (
    <div className={styles.container}>
      <div className='w-full grid grid-cols-12 gap-x-[8px] lg:gap-x-[16px] xl:gap-x-[80px] gap-y-[17px]'>
        <div className='col-span-12 lg:col-span-5'>
          <CardCreditLimit onClick={() => setStep(1)} viewport={viewport} />
          <div className='font-secondary-bold text-lg mt-[31px]'>Invitations</div>
          <div className='w-full mt-9'>
            <Tab
              tabList={tabList}
              activeTab={activeTab}
              selectTab={(index: number) => handleSelectTab(index)}
            />
          </div>
          <div className={`max-h-[500px] overflow-y-auto ${styles.invitationContainer}`}>
            {activeTab === 0 && allInvitations.length === 0 && (
              <div className='mt-9'>
                <CardNoInvitation type='all' />
              </div>
            )}

            {activeTab === 0 && allInvitations.length !== 0 && pendingInvitations.length === 0 && (
              <div className='mt-9'>
                <CardNoInvitation type='pending' />
              </div>
            )}
            {activeTab === 0 &&
              allInvitations.length !== 0 &&
              pendingInvitations.length !== 0 &&
              allInvitations.map((item, index) => (
                <div className='w-full my-3 overflow-y-auto' key={index}>
                  <CardInvitation
                    data={item}
                    onOkClick={() => setOpenDisclaimer01(true)}
                    onCancelClick={() => setOpenDecline(true)}
                  />
                </div>
              ))}
            {activeTab === 1 &&
              acceptedInvitations.map((item, index) => (
                <div className='w-full my-3' key={index}>
                  <CardInvitation
                    data={item}
                    onOkClick={() => setOpenDisclaimer01(true)}
                    onCancelClick={() => setOpenDecline(true)}
                  />
                </div>
              ))}
            {activeTab === 2 &&
              declinedInvitations.map((item, index) => (
                <div className='w-full my-3' key={index}>
                  <CardInvitation
                    data={item}
                    onOkClick={() => setOpenDisclaimer01(true)}
                    onCancelClick={() => setOpenDecline(true)}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className='col-span-12 lg:col-span-7'>
          <div className='font-secondary-bold text-lg'>Program Utilization</div>
          {showLoanRepaymentSections && (
            <div className='w-full flex flex-wrap md:flex-nowrap justify-center gap-2 md:gap-[34px] mt-[25px]'>
              <CardLeftLine label='Outstanding Balance' value={`$${totalOutStanding}`} />
              <CardLeftLine label='Active Loans' value={`${activeLoans}`} />
            </div>
          )}
          {showLoanRepaymentSections && (
            <div className={styles.loanRepaymentCard}>
              <SliderLoanRepayment data={dashboardRepayments} viewport={viewport} activeIndex={0} />
            </div>
          )}
          <div className='w-full flex justify-center mt-[25px] lg:mt-9'>
            <AccordionRepaymentCycle data={RepaymentCycleList} />
          </div>
          <div className='w-full flex justify-center mt-[25px] lg:mt-9'>
            <AccordionBasisWork data={BasisWorkList} />
          </div>
        </div>
      </div>
      <ModalLoanGeneration01
        open={step === 1}
        onClick={() => setStep(2)}
        title01='Check Your'
        title02='Financing Limit'
        description='We are glad that you have made this far, now let’s check your financing limit & get your loan approved within minutes'
      />
      <ModalLoanGeneration02
        open={step === 2}
        onClick={() => setStep(3)}
        title01='Check Your'
        title02='Financing Limit'
        description01='We are glad that you have made this far, now let’s check your financing limit & get your loan approved within minutes'
        description02='Read Equifax T&C below and agree to proceed'
        content={FinancingLimit}
      />
      <ModalLoanGeneration03
        open={step === 3}
        onClickDecline={() => setStep(5)}
        onClickError={() => setStep(6)}
        onClickApprove={() => setStep(4)}
      />
      <ModalLoanGeneration04 open={step === 4} onClick={() => setStep(0)} viewport={viewport} />
      <ModalLoanGeneration05 open={step === 5} onClick={() => setStep(3)} viewport={viewport} />
      <ModalLoanGeneration06 open={step === 6} viewport={viewport} />

      {/* disclaimer modal */}
      <ModalDisclaimer01
        open={openDisclaimer01}
        onOkClick={() => {
          setOpenDisclaimer01(false);
          navigate('/dashboard/spending-amount');
        }}
        onCancelClick={() => {
          setOpenDisclaimer01(false);
          setOpenDisclaimer02(true);
        }}
      />
      <ModalDisclaimer02 open={openDisclaimer02} onOkClick={() => setOpenDisclaimer02(false)} />
      <ModalDecline
        open={openDecline}
        onOkClick={() => setOpenDecline(false)}
        onCancelClick={() => setOpenDecline(false)}
      />
    </div>
  );
};

export default Dashboard;
