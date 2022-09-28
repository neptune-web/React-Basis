import { DialogAction, DialogActions } from 'redux/actionTypes/dialogActions';

export enum DialogType {
  SUCCESS = 'success',
  ERROR = 'error',
  NONE = 'none',
}

export interface DialogDetails {
  visible: boolean;
  dialogType: DialogType;
  label: string;
}

const initialState = {
  visible: false,
  dialogType: DialogType.NONE,
  label: '',
};

const dialogStateReducer = (
  state: DialogDetails = initialState,
  action: DialogAction
): DialogDetails => {
  switch (action.type) {
    case DialogActions.SHOW_DIALOG:
      return {
        visible: true,
        dialogType: action.payload.dialogType,
        label: action.payload.label,
      } as DialogDetails;
    case DialogActions.HIDE_DIALOG:
      return {
        visible: false,
        dialogType: 'none',
        label: '',
      } as DialogDetails;
    default:
      return state;
  }
};

export default dialogStateReducer;
