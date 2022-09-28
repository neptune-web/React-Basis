import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { DialogDetails } from 'redux/reducers/dialogState';
import AlertDialog from 'stories/AlertDialog';

interface DialogsWrapperProps {
  children: ReactNode;
}

const DialogsWrapper = ({ children }: DialogsWrapperProps) => {
  const dialogDetails = useSelector((state: any) => state.dialogs as DialogDetails);

  const { visible, dialogType, label } = dialogDetails;

  return (
    <>
      {children}

      <AlertDialog visible={visible} dialogType={dialogType} label={label} />
    </>
  );
};

export default DialogsWrapper;
