import React from 'react';
import { useDispatch } from 'react-redux';
import { hideDialog } from 'redux/actionCreators/showDialogs';
import { DialogType } from 'redux/reducers/dialogState';
import styles from './index.module.scss';

interface AlertDialogProps {
  visible: boolean;
  dialogType: DialogType;
  label: string;
}

const AlertDialog = ({
  visible = false,
  dialogType = DialogType.NONE,
  label = '',
}: AlertDialogProps) => {
  const dispatch = useDispatch();

  if (visible) {
    return (
      <div
        className={`${styles.container} ${
          dialogType === DialogType.SUCCESS
            ? styles.success_container
            : dialogType === DialogType.ERROR
            ? styles.error_container
            : ''
        }`}
      >
        <div className='font-primary-regular font-white-color text-sm'>{label}</div>

        <button
          type='button'
          className={styles.closeButton}
          onClick={() => dispatch(hideDialog() as any)}
        >
          <div>×</div>
        </button>
      </div>
    );
  }

  return null;
};

export default AlertDialog;
