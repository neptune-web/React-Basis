export enum DialogActions {
  SHOW_DIALOG = 'SHOW_DIALOG',
  HIDE_DIALOG = 'HIDE_DIALOG',
}

interface ShowDialogAction {
  type: DialogActions.SHOW_DIALOG;
  payload: {
    dialogType: 'error' | 'success' | 'none';
    label: string;
  };
}

interface HideDialogAction {
  type: DialogActions.HIDE_DIALOG;
}

export type DialogAction = ShowDialogAction | HideDialogAction;
