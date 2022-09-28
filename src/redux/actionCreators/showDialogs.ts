import { Dispatch } from 'redux';
import { DialogAction, DialogActions } from 'redux/actionTypes/dialogActions';

export const hideDialog = () => (dispatch: Dispatch<DialogAction>) => {
  dispatch({
    type: DialogActions.HIDE_DIALOG,
  });
};

export const showSuccessDialog =
  (successMessage = '', hideSeconds = 5) =>
  (dispatch: Dispatch<DialogAction>) => {
    dispatch({
      type: DialogActions.SHOW_DIALOG,
      payload: {
        dialogType: 'success',
        label: successMessage,
      },
    });

    setTimeout(() => dispatch(hideDialog() as any), hideSeconds * 1000);
  };

export const showErrorDialog =
  (errorMessage = '', hideSeconds = 5) =>
  (dispatch: Dispatch<DialogAction>) => {
    dispatch({
      type: DialogActions.SHOW_DIALOG,
      payload: {
        dialogType: 'error',
        label: errorMessage,
      },
    });

    setTimeout(() => dispatch(hideDialog() as any), hideSeconds * 1000);
  };
