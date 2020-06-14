import { createSelector } from 'reselect';

const selectViewPlacement = (state) => state.viewPlacement;

export const selectTableData = createSelector([selectViewPlacement], (viewPlacement) => viewPlacement.tableData);

export const selectDialogOpen = createSelector([selectViewPlacement], (viewPlacement) => viewPlacement.dialog_open);

export const selectError = createSelector([selectViewPlacement], (viewPlacement) => viewPlacement.error);
