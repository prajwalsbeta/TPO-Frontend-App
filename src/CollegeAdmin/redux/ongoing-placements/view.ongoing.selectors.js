import { createSelector } from 'reselect';

const selectViewOngoing = (state) => state.viewOngoing;

export const selectTableData = createSelector([selectViewOngoing], (viewOngoing) => viewOngoing.tableData);

export const selectDialogOpen = createSelector([selectViewOngoing], (viewOngoing) => viewOngoing.dialog_open);
